const samples = require('../samples/ReceiptsApi');
const CreateReceiptRequest = require('../models/CreateReceiptRequest');
const CreateReceiptResponse = require('../models/CreateReceiptResponse');
const GetReceiptPreCreateInfoResponse = require('../models/GetReceiptPreCreateInfoResponse');
const GetReceiptResponse = require('../models/GetReceiptResponse');
const GetReceiptsMonthlyTotalsResponse = require('../models/GetReceiptsMonthlyTotalsResponse');
const ListReceiptsResponse = require('../models/ListReceiptsResponse');
const ModifyReceiptRequest = require('../models/ModifyReceiptRequest');
const ModifyReceiptResponse = require('../models/ModifyReceiptResponse');
const utils = require('../utils/utils');

module.exports = {
    createReceipt: {
        key: 'createReceipt',
        noun: 'Receipts',
        display: {
            label: 'Create Receipt',
            description: 'Creates a new receipt.',
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
                ...CreateReceiptRequest.fields(),
            ],
            outputFields: [
                ...CreateReceiptResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateReceiptRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createReceipt', response.json);
                    return results;
                })
            },
            sample: samples['CreateReceiptResponseSample']
        }
    },
    deleteReceipt: {
        key: 'deleteReceipt',
        noun: 'Receipts',
        display: {
            label: 'Delete Receipt',
            description: 'Deletes the specified receipt.',
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
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts/{document_id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteReceipt', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getReceipt: {
        key: 'getReceipt',
        noun: 'Receipts',
        display: {
            label: 'Get Receipt',
            description: 'Gets the specified receipt.',
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
                    type: 'integer',
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
                ...GetReceiptResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts/{document_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
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
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReceipt', response.json);
                    return results;
                })
            },
            sample: samples['GetReceiptResponseSample']
        }
    },
    getReceiptPreCreateInfo: {
        key: 'getReceiptPreCreateInfo',
        noun: 'Receipts',
        display: {
            label: 'Get Receipt Pre-Create Info',
            description: 'Retrieves the information useful while creating a new receipt.',
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
                ...GetReceiptPreCreateInfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts/info'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReceiptPreCreateInfo', response.json);
                    return results;
                })
            },
            sample: samples['GetReceiptPreCreateInfoResponseSample']
        }
    },
    getReceiptsMonthlyTotals: {
        key: 'getReceiptsMonthlyTotals',
        noun: 'Receipts',
        display: {
            label: 'Get Receipts Monthly Totals',
            description: 'Returns the monthly totals by year and receipt type.',
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
                    key: 'type',
                    label: 'Receipt Type',
                    type: 'string',
                    required: true,
                    choices: [
                        'sales_receipt',
                        'till_receipt',
                    ],
                },
                {
                    key: 'year',
                    label: 'Year for which you want monthly totals',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...GetReceiptsMonthlyTotalsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts/monthly_totals'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'type': bundle.inputData?.['type'],
                        'year': bundle.inputData?.['year'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReceiptsMonthlyTotals', response.json);
                    return results;
                })
            },
            sample: samples['GetReceiptsMonthlyTotalsResponseSample']
        }
    },
    listReceipts: {
        key: 'listReceipts',
        noun: 'Receipts',
        display: {
            label: 'List Receipts',
            description: 'Lists the receipts.',
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
                {
                    key: 'page',
                    label: 'The page to retrieve.',
                    type: 'integer',
                },
                {
                    key: 'per_page',
                    label: 'The size of the page.',
                    type: 'integer',
                },
                {
                    key: 'sort',
                    label: 'List of comma-separated fields for result sorting (minus for desc sorting).',
                    type: 'string',
                },
                {
                    key: 'q',
                    label: 'Query for filtering the results.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ListReceiptsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'fields': bundle.inputData?.['fields'],
                        'fieldset': bundle.inputData?.['fieldset'],
                        'page': bundle.inputData?.['page'],
                        'per_page': bundle.inputData?.['per_page'],
                        'sort': bundle.inputData?.['sort'],
                        'q': bundle.inputData?.['q'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listReceipts', response.json);
                    return results;
                })
            },
            sample: samples['ListReceiptsResponseSample']
        }
    },
    modifyReceipt: {
        key: 'modifyReceipt',
        noun: 'Receipts',
        display: {
            label: 'Modify Receipt',
            description: 'Modifies the specified receipt.',
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
                    type: 'integer',
                    required: true,
                },
                ...ModifyReceiptRequest.fields(),
            ],
            outputFields: [
                ...ModifyReceiptResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/receipts/{document_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ModifyReceiptRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'modifyReceipt', response.json);
                    return results;
                })
            },
            sample: samples['ModifyReceiptResponseSample']
        }
    },
}
