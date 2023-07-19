const samples = require('../samples/CashbookApi');
const CreateCashbookEntryRequest = require('../models/CreateCashbookEntryRequest');
const CreateCashbookEntryResponse = require('../models/CreateCashbookEntryResponse');
const GetCashbookEntryResponse = require('../models/GetCashbookEntryResponse');
const ListCashbookEntriesResponse = require('../models/ListCashbookEntriesResponse');
const ModifyCashbookEntryRequest = require('../models/ModifyCashbookEntryRequest');
const ModifyCashbookEntryResponse = require('../models/ModifyCashbookEntryResponse');
const utils = require('../utils/utils');

module.exports = {
    createCashbookEntry: {
        key: 'createCashbookEntry',
        noun: 'Cashbook',
        display: {
            label: 'Create Cashbook Entry',
            description: 'Creates a new cashbook entry.',
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
                ...CreateCashbookEntryRequest.fields(),
            ],
            outputFields: [
                ...CreateCashbookEntryResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook'),
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
                        ...CreateCashbookEntryRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreateCashbookEntryResponseSample']
        }
    },
    deleteCashbookEntry: {
        key: 'deleteCashbookEntry',
        noun: 'Cashbook',
        display: {
            label: 'Delete Cashbook Entry',
            description: 'Deletes the specified cashbook entry.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook/{document_id}'),
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
    getCashbookEntry: {
        key: 'getCashbookEntry',
        noun: 'Cashbook',
        display: {
            label: 'Get Cashbook Entry',
            description: 'Gets the specified cashbook entry.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fields',
                    label: 'List of comma-separated fields.',
                    type: 'string',
                },
                {
                    key: 'fieldset',
                    label: 'Name of the fieldset.',
                    type: 'string',
                    choices: [
                        'basic',
                        'detailed',
                    ],
                },
            ],
            outputFields: [
                ...GetCashbookEntryResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook/{document_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'fields': bundle.inputData?.['fields'],
                        'fieldset': bundle.inputData?.['fieldset'],
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
            sample: samples['GetCashbookEntryResponseSample']
        }
    },
    listCashbookEntries: {
        key: 'listCashbookEntries',
        noun: 'Cashbook',
        display: {
            label: 'List Cashbook Entries',
            description: 'Lists the cashbook entries.',
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
                    key: 'date_from',
                    label: 'Start date.',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'date_to',
                    label: 'End date.',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'year',
                    label: 'Filter cashbook by year.',
                    type: 'integer',
                },
                {
                    key: 'type',
                    label: 'Filter cashbook by type.',
                    type: 'string',
                    choices: [
                        'all',
                        'in',
                        'out',
                    ],
                },
                {
                    key: 'payment_account_id',
                    label: 'Filter by payment account.',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...ListCashbookEntriesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'date_from': bundle.inputData?.['date_from'],
                        'date_to': bundle.inputData?.['date_to'],
                        'year': bundle.inputData?.['year'],
                        'type': bundle.inputData?.['type'],
                        'payment_account_id': bundle.inputData?.['payment_account_id'],
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
            sample: samples['ListCashbookEntriesResponseSample']
        }
    },
    modifyCashbookEntry: {
        key: 'modifyCashbookEntry',
        noun: 'Cashbook',
        display: {
            label: 'Modify Cashbook Entry',
            description: 'Modifies the specified cashbook entry.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'string',
                    required: true,
                },
                ...ModifyCashbookEntryRequest.fields(),
            ],
            outputFields: [
                ...ModifyCashbookEntryResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook/{document_id}'),
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
                        ...ModifyCashbookEntryRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyCashbookEntryResponseSample']
        }
    },
}
