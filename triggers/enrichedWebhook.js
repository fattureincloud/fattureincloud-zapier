const _ = require('lodash')
const { getWebhooksOperation, getDefaultGetOperationParams } = require('./webhooksActionsMapping');
const { extractResourceAndOperation } = require('../utils/utils');
const rawWebhook = require('./rawWebhook');

const perform = async (z, bundle) => {
    let req = bundle.cleanedRequest;
    const ids = req?.data?.ids;
    if(_.isEmpty(ids)) return []
    // const eventId = req.id;
    // const eventSource = req.source;
    // const eventTime = req.time;
    const eventType = req.type;
    const eventSubject = req.subject;

    let companyId = null;
  
    const spl = eventSubject.split(':');
    if (spl[0] == 'company') {
        companyId = spl[1];
    }
  
    return Promise.all(ids.map(async (id) => {
        let {resource, eventOperation} = extractResourceAndOperation(eventType)
        let operation = getWebhooksOperation(resource)
        if (eventOperation === 'delete') return {id}
        bundle.inputData[operation['resourceKeyId']] = id
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

let rawWebhookOperation = {...rawWebhook.operation};

rawWebhookOperation.perform = perform
rawWebhookOperation.performList = performList

module.exports = {
    operation: {
        ...rawWebhookOperation
    },
    key: 'genericWebhook',
    noun: 'Enriched Event',
    display: {
        label: 'Receive Enriched Event',
        description: 'Triggers when a webhooks arrives from Fatture in Cloud, returns an array of resources',
        hidden: false,
    },
};
  