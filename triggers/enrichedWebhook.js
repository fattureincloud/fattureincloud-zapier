const _ = require('lodash')
const { getWebhooksOperation, getDefaultGetOperationParams } = require('./webhooksActionsMapping');
const { extractResourceAndOperation } = require('../utils/utils');
const rawWebhook = require('./rawWebhook');

const perform = async (z, bundle) => {
    let reqHeaders = bundle.rawRequest.headers;
    const ids = bundle.cleanedRequest?.data?.ids;
    if(_.isEmpty(ids)) return []
    // const eventId = reqHeaders['Http-Ce-Id'];
    // const eventSource = reqHeaders['Http-Ce-Source'];
    // const eventTime = reqHeaders['Http-Ce-Time'];

    const eventType = reqHeaders['Http-Ce-Type'];
    const eventSubject = reqHeaders['Http-Ce-Subject'];

    let companyId = null;
  
    const spl = eventSubject.split(':');
    if (spl[0] == 'company') {
        companyId = spl[1];
    }

    const {resource, eventOperation} = extractResourceAndOperation(eventType)
    const resourceOp = getWebhooksOperation(resource)

    let resources = []
    for(const id of ids) {
        if (eventOperation === 'delete') return {id}
        bundle.inputData[resourceOp['resourceKeyId']] = id
        const res = await (resourceOp['getOperation']).operation.perform(z, bundle)
        resources.push(res.data)
    }
    return resources

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
        description: 'Triggers when a webhooks arrives from Fatture in Cloud, returns an array of resources.',
        hidden: false,
    },
};
  