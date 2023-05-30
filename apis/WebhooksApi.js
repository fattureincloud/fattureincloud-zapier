const CreateWebhooksSubscriptionRequest = require('../models/CreateWebhooksSubscriptionRequest').fields;
const CreateWebhooksSubscriptionRequestMapping = require('../models/CreateWebhooksSubscriptionRequest').mapping;
const CreateWebhooksSubscriptionResponse = require('../models/CreateWebhooksSubscriptionResponse').fields;
const GetWebhooksSubscriptionResponse = require('../models/GetWebhooksSubscriptionResponse').fields;
const ListWebhooksSubscriptionsResponse = require('../models/ListWebhooksSubscriptionsResponse').fields;
const ModifyWebhooksSubscriptionRequest = require('../models/ModifyWebhooksSubscriptionRequest').fields;
const ModifyWebhooksSubscriptionRequestMapping = require('../models/ModifyWebhooksSubscriptionRequest').mapping;
const ModifyWebhooksSubscriptionResponse = require('../models/ModifyWebhooksSubscriptionResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createWebhooksSubscription: {
        key: 'createWebhooksSubscription',
        noun: 'Webhooks',
        display: {
            label: 'createWebhooksSubscription',
            description: 'Register some webhooks Subscriptions.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    dynamic: 'listUserCompaniesTrigger.id.name',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
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
        noun: 'Webhooks',
        display: {
            label: 'deleteWebhooksSubscription',
            description: 'Delete a webhooks subscription.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    dynamic: 'listUserCompaniesTrigger.id.name',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                },
                {
                    key: 'subscription_id',
                    label: 'The ID of the subscription.',
                    type: 'string',
                    required: true,
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
        noun: 'Webhooks',
        display: {
            label: 'getWebhooksSubscription',
            description: 'Get a webhooks subscription.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    dynamic: 'listUserCompaniesTrigger.id.name',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                },
                {
                    key: 'subscription_id',
                    label: 'The ID of the subscription.',
                    type: 'string',
                    required: true,
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
        noun: 'Webhooks',
        display: {
            label: 'listWebhooksSubscriptions',
            description: 'List active webhooks subscriptions.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    dynamic: 'listUserCompaniesTrigger.id.name',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
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
        noun: 'Webhooks',
        display: {
            label: 'modifyWebhooksSubscription',
            description: 'Edit a webhooks subscription.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    dynamic: 'listUserCompaniesTrigger.id.name',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                },
                {
                    key: 'subscription_id',
                    label: 'The ID of the subscription.',
                    type: 'string',
                    required: true,
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
