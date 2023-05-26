const CreateCashbookEntryRequest = require('../models/CreateCashbookEntryRequest').fields;
const CreateCashbookEntryRequestMapping = require('../models/CreateCashbookEntryRequest').mapping;
const CreateCashbookEntryResponse = require('../models/CreateCashbookEntryResponse').fields;
const GetCashbookEntryResponse = require('../models/GetCashbookEntryResponse').fields;
const ListCashbookEntriesResponse = require('../models/ListCashbookEntriesResponse').fields;
const ModifyCashbookEntryRequest = require('../models/ModifyCashbookEntryRequest').fields;
const ModifyCashbookEntryRequestMapping = require('../models/ModifyCashbookEntryRequest').mapping;
const ModifyCashbookEntryResponse = require('../models/ModifyCashbookEntryResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createCashbookEntry: {
        key: 'createCashbookEntry',
        noun: 'Create Cashbook Entry',
        display: {
            label: 'createCashbookEntry',
            description: 'Creates a new cashbook entry.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                    dynamic: 'listUserCompaniesTrigger.id.name',
                },
                ...CreateCashbookEntryRequest(),
            ],
            outputFields: [
                ...CreateCashbookEntryResponse(),
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
                        ...CreateCashbookEntryRequestMapping(bundle),
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
    deleteCashbookEntry: {
        key: 'deleteCashbookEntry',
        noun: 'Delete Cashbook Entry',
        display: {
            label: 'deleteCashbookEntry',
            description: 'Deletes the specified cashbook entry.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                    dynamic: 'listUserCompaniesTrigger.id.name',
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
    getCashbookEntry: {
        key: 'getCashbookEntry',
        noun: 'Get Cashbook Entry',
        display: {
            label: 'getCashbookEntry',
            description: 'Gets the specified cashbook entry.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                    dynamic: 'listUserCompaniesTrigger.id.name',
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
                ...GetCashbookEntryResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook/{document_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
            }
        }
    },
    listCashbookEntries: {
        key: 'listCashbookEntries',
        noun: 'List Cashbook Entries',
        display: {
            label: 'listCashbookEntries',
            description: 'Lists the cashbook entries.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                    dynamic: 'listUserCompaniesTrigger.id.name',
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
                ...ListCashbookEntriesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/cashbook'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
            }
        }
    },
    modifyCashbookEntry: {
        key: 'modifyCashbookEntry',
        noun: 'Modify Cashbook Entry',
        display: {
            label: 'modifyCashbookEntry',
            description: 'Modifies the specified cashbook entry.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                    dynamic: 'listUserCompaniesTrigger.id.name',
                },
                {
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'string',
                    required: true,
                },
                ...ModifyCashbookEntryRequest(),
            ],
            outputFields: [
                ...ModifyCashbookEntryResponse(),
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
                        ...ModifyCashbookEntryRequestMapping(bundle),
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
