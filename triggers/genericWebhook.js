const _ = require('lodash')
const WebhooksApi = require('../apis/WebhooksApi');
const { getWebhooksOperation, getDefaultGetOperationParams } = require('./webhooksActionsMapping');
const EventType = require('../models/EventType');
const { extractResourceAndOperation } = require('../utils/utils');

const perform = async (z, bundle) => {
    let req = bundle.cleanedRequest;
    const ids = req?.data?.ids;
    if(_.isEmpty(ids)) return []
    const eventId = req.id;
    const eventSource = req.source;
    const eventType = req.type;
    const eventSubject = req.subject;
    const eventTime = req.time;

    let companyId = null;
  
    const spl = eventSubject.split(':');
    if (spl[0] == 'company') {
        companyId = spl[1];
    }
  
    const events = ids.map((i) => (
        {
            eventId: eventId,
            eventSource: eventSource,
            eventType: eventType,
            eventSubject: eventSubject,
            eventTime: eventTime,
            resourceId: i,
        })
    )

    return Promise.all(events.map(async (ev) => {
        let {resource, eventOperation} = extractResourceAndOperation(ev.eventType)
        let operation = getWebhooksOperation(resource)
        if (eventOperation === 'delete') return ev.resourceId
        bundle.inputData[operation['resourceKeyId']] = ev.resourceId
        let res = await (operation['getOperation']).operation.perform(z, bundle)
        return res.data
    }))

};

const performList = async (z, bundle) => {
    let operation = getWebhooksOperation(bundle.inputData.resource)
    bundle.inputData['fieldset'] = 'detailed'
    bundle.inputData = {...bundle.inputData, ...getDefaultGetOperationParams(bundle.inputData.resource)}

    try {
        let docList = await operation['listOperation'].operation.perform(z, bundle)
        let example = [docList?.[0]] || [{}]
        return example
    } catch (e) {
        return [{}]
    }
    
}

const performSubscribe = async (z, bundle) => {
    bundle.inputData['data.sink'] = bundle.targetUrl
    bundle.inputData['data.types'] = bundle.inputData.event_types.map(et => `it.fattureincloud.webhooks.${bundle.inputData.resource}.${et}`)

    return WebhooksApi.createWebhooksSubscription.operation.perform(z, bundle)
}

const performUnsubscribe = async (z, bundle) => {
    bundle.inputData['subscription_id'] = bundle.subscribeData.data.id

    return WebhooksApi.deleteWebhooksSubscription.operation.perform(z, bundle)
}

module.exports = {
    operation: {
        perform: perform,
        performList: performList,
        inputFields: [
            {
                key: 'company_id',
                type: 'integer',
                label: 'Company ID',
                helpText: 'The ID of the Company to be used.',
                dynamic: 'listUserCompaniesTrigger.id.name',
                required: true,
                list: false,
                altersDynamicFields: false,
            },
            {
                key: 'resource',
                type: 'string',
                label: 'Resource Type',
                helpText: 'The Event Types to be received.',
                choices: [...new Set(EventType.fields('').choices.map(type => extractResourceAndOperation(type).resource))],
                required: true,
                altersDynamicFields: true,
            },
            {
                key: 'event_types',
                type: 'string',
                label: 'Event Types',
                helpText: 'The Event Types to be received.',
                dynamic: 'listWebhooksResourceOperations.id.type',
                required: true,
                list: true,
                altersDynamicFields: false,
            },
        ],
        type: 'hook',
        performUnsubscribe: performUnsubscribe,
        performSubscribe: performSubscribe,
        sample: {
            id: 12345
        }
    },
    key: 'genericWebhook',
    noun: 'Generic Event',
    display: {
        label: 'Receive Generic Event',
        description: 'Triggers when a webhooks arrives from Fatture in Cloud.',
        hidden: false,
    },
};
  