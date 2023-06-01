const utils = require('../utils/utils');
const _ = require('lodash')
const ClientsApi = require('../apis/ClientsApi');
const WebhooksApi = require('../apis/WebhooksApi');
const { getWebhooksOperation } = require('./webhooksActionsMapping');

const perform = async (z, bundle) => {
    let req = bundle.cleanedRequest;
    z.console.log(JSON.stringify({bundle: bundle}))
    z.console.log(JSON.stringify({request: req}))
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

    z.console.log(JSON.stringify({events: events}))

    return Promise.all(events.map(async (ev) => {
        let lastDot = ev.eventType.lastIndexOf('.')
        let resource = ev.eventType.substring('it.fattureincloud.webhooks.'.length, lastDot)
        z.console.log("resource: " + resource)
        let operation = getWebhooksOperation(resource)
        z.console.log(JSON.stringify({operation: operation}))
        if (ev.eventType.substring(lastDot) === 'delete') return ev.resourceId
        bundle.inputData[operation['resourceKeyId']] = ev.resourceId
        let res = await (operation['operation']).operation.perform(z, bundle)
        z.console.log(JSON.stringify({response: res}))
        return res.data
    }))

};

const performList = (z, bundle) => {
    return [{
            "id": 76543,
            "name": "paolo",
        }]
}

const performSubscribe = async (z, bundle) => {
    bundle.inputData['data.sink'] = bundle.targetUrl
    bundle.inputData['data.types'] = bundle.inputData.event_types.map(et => `it.fattureincloud.webhooks.${bundle.inputData.resource}.${et}`)

    return WebhooksApi.createWebhooksSubscription.operation.perform(z, bundle)
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
            choices: [
                'entities.clients',
                'entities.suppliers',
                'products',
            ],
            required: true,
            altersDynamicFields: false,
        },
        {
            key: 'event_types',
            type: 'string',
            label: 'Event Types',
            helpText: 'The Event Types to be received.',
            choices: [
            'create',
            'update',
            'delete',
            ],
            required: true,
            list: true,
            altersDynamicFields: false,
        },
        ],
        type: 'hook',
        performUnsubscribe: {
        body: { hookUrl: '{{bundle.subscribeData.id}}' },
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer {{bundle.authData.access_token}}',
        },
        method: 'DELETE',
        url: 'https://api-v2.fattureincloud.it/c/{{bundle.inputData.company_id}}/subscriptions/{{bundle.subscribeData.data.id}}',
        },
        performSubscribe: performSubscribe,
        sample: {
        eventId: '112:13bc7527-3fd4-44bc-8790-8cfd6cc90670',
        eventSource: 'https://api-v2.fattureincloud.it',
        eventType: 'it.fattureincloud.webhooks.entities.clients.create',
        eventSubject: 'company:33',
        eventTime: '2022-10-07T09:11:23Z',
        resourceId: 12345,
        companyId: 33,
        },
        outputFields: [
        { key: 'eventId', label: "ID dell'evento" },
        { key: 'eventSource', label: "Sorgente dell'evento" },
        { key: 'eventType', label: 'Tipo di evento' },
        { key: 'eventSubject', label: "Soggetto dell'evento" },
        { key: 'eventTime', label: "Timestamp dell'evento" },
        { key: 'resourceId', label: 'ID della risorsa' },
        { key: 'companyId', label: "ID dell'azienda" },
        ],
    },
    key: 'baseEvent',
    noun: 'Event',
    display: {
        label: 'Receive Event',
        description: 'Receive an event from webhooks',
        hidden: false,
    },
};
  