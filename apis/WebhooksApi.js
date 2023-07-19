const samples = require('../samples/WebhooksApi');
const CreateWebhooksSubscriptionRequest = require('../models/CreateWebhooksSubscriptionRequest');
const CreateWebhooksSubscriptionResponse = require('../models/CreateWebhooksSubscriptionResponse');
const GetWebhooksSubscriptionResponse = require('../models/GetWebhooksSubscriptionResponse');
const ListWebhooksSubscriptionsResponse = require('../models/ListWebhooksSubscriptionsResponse');
const ModifyWebhooksSubscriptionRequest = require('../models/ModifyWebhooksSubscriptionRequest');
const ModifyWebhooksSubscriptionResponse = require('../models/ModifyWebhooksSubscriptionResponse');
const utils = require('../utils/utils');

module.exports = {
    createWebhooksSubscription: {
        key: 'createWebhooksSubscription',
        noun: 'Webhooks',
        display: {
            label: 'Create a Webhook Subscription',
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
                ...CreateWebhooksSubscriptionRequest.fields(),
            ],
            outputFields: [
                ...CreateWebhooksSubscriptionResponse.fields('', false),
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
                        ...CreateWebhooksSubscriptionRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreateWebhooksSubscriptionResponseSample']
        }
    },
    deleteWebhooksSubscription: {
        key: 'deleteWebhooksSubscription',
        noun: 'Webhooks',
        display: {
            label: 'Delete Webhooks Subscription',
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
                        'Content-Type': '',
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
            },
            sample: { data: {} }
        }
    },
    getWebhooksSubscription: {
        key: 'getWebhooksSubscription',
        noun: 'Webhooks',
        display: {
            label: 'Get Webhooks Subscription',
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
                ...GetWebhooksSubscriptionResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions/{subscription_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
            },
            sample: samples['GetWebhooksSubscriptionResponseSample']
        }
    },
    listWebhooksSubscriptions: {
        key: 'listWebhooksSubscriptions',
        noun: 'Webhooks',
        display: {
            label: 'List Webhooks Subscriptions',
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
                ...ListWebhooksSubscriptionsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/subscriptions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
            },
            sample: samples['ListWebhooksSubscriptionsResponseSample']
        }
    },
    modifyWebhooksSubscription: {
        key: 'modifyWebhooksSubscription',
        noun: 'Webhooks',
        display: {
            label: 'Modify Webhooks Subscription',
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
                ...ModifyWebhooksSubscriptionRequest.fields(),
            ],
            outputFields: [
                ...ModifyWebhooksSubscriptionResponse.fields('', false),
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
                        ...ModifyWebhooksSubscriptionRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyWebhooksSubscriptionResponseSample']
        }
    },
}
