const CreateWebhooksSubscriptionRequest = require('../Models/CreateWebhooksSubscriptionRequest').fields;
const CreateWebhooksSubscriptionRequestMapping = require('../Models/CreateWebhooksSubscriptionRequest').mapping;
const CreateWebhooksSubscriptionResponse = require('../Models/CreateWebhooksSubscriptionResponse').fields;
const GetWebhooksSubscriptionResponse = require('../Models/GetWebhooksSubscriptionResponse').fields;
const ListWebhooksSubscriptionsResponse = require('../Models/ListWebhooksSubscriptionsResponse').fields;
const ModifyWebhooksSubscriptionRequest = require('../Models/ModifyWebhooksSubscriptionRequest').fields;
const ModifyWebhooksSubscriptionRequestMapping = require('../Models/ModifyWebhooksSubscriptionRequest').mapping;
const ModifyWebhooksSubscriptionResponse = require('../Models/ModifyWebhooksSubscriptionResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createWebhooksSubscription: {
        key: 'createWebhooksSubscription',
        noun: 'Create a Webhook Subscription',
        display: {
            label: 'createWebhooksSubscription',
            description: 'Register some webhooks Subscriptions.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                ...CreateWebhooksSubscriptionRequest(),
            ],
            outputFields: [
                ...CreateWebhooksSubscriptionResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateWebhooksSubscriptionRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    deleteWebhooksSubscription: {
        key: 'deleteWebhooksSubscription',
        noun: 'Delete Webhooks Subscription',
        display: {
            label: 'deleteWebhooksSubscription',
            description: 'Delete a webhooks subscription.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'subscription_id',
                    label: 'The ID of the subscription.',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions/{subscription_id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    getWebhooksSubscription: {
        key: 'getWebhooksSubscription',
        noun: 'Get Webhooks Subscription',
        display: {
            label: 'getWebhooksSubscription',
            description: 'Get a webhooks subscription.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'subscription_id',
                    label: 'The ID of the subscription.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...GetWebhooksSubscriptionResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions/{subscription_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    listWebhooksSubscriptions: {
        key: 'listWebhooksSubscriptions',
        noun: 'List Webhooks Subscriptions',
        display: {
            label: 'listWebhooksSubscriptions',
            description: 'List active webhooks subscriptions.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...ListWebhooksSubscriptionsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    modifyWebhooksSubscription: {
        key: 'modifyWebhooksSubscription',
        noun: 'Modify Webhooks Subscription',
        display: {
            label: 'modifyWebhooksSubscription',
            description: 'Edit a webhooks subscription.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'subscription_id',
                    label: 'The ID of the subscription.',
                    type: 'string',
                },
                ...ModifyWebhooksSubscriptionRequest(),
            ],
            outputFields: [
                ...ModifyWebhooksSubscriptionResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions/{subscription_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ModifyWebhooksSubscriptionRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
}
