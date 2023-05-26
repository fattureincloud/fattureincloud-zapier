const CreateSupplierRequest = require('../models/CreateSupplierRequest').fields;
const CreateSupplierRequestMapping = require('../models/CreateSupplierRequest').mapping;
const CreateSupplierResponse = require('../models/CreateSupplierResponse').fields;
const GetSupplierResponse = require('../models/GetSupplierResponse').fields;
const ListSuppliersResponse = require('../models/ListSuppliersResponse').fields;
const ModifySupplierRequest = require('../models/ModifySupplierRequest').fields;
const ModifySupplierRequestMapping = require('../models/ModifySupplierRequest').mapping;
const ModifySupplierResponse = require('../models/ModifySupplierResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createSupplier: {
        key: 'createSupplier',
        noun: 'Create Supplier',
        display: {
            label: 'createSupplier',
            description: 'Creates a new supplier.',
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
                ...CreateSupplierRequest(),
            ],
            outputFields: [
                ...CreateSupplierResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/entities/suppliers'),
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
                        ...CreateSupplierRequestMapping(bundle),
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
    deleteSupplier: {
        key: 'deleteSupplier',
        noun: 'Delete Supplier',
        display: {
            label: 'deleteSupplier',
            description: 'Deletes the specified supplier.',
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
                    key: 'supplier_id',
                    label: 'The ID of the supplier.',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/entities/suppliers/{supplier_id}'),
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
    getSupplier: {
        key: 'getSupplier',
        noun: 'Get Supplier',
        display: {
            label: 'getSupplier',
            description: 'Gets the specified supplier.',
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
                    key: 'supplier_id',
                    label: 'The ID of the supplier.',
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
                ...GetSupplierResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/entities/suppliers/{supplier_id}'),
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
    listSuppliers: {
        key: 'listSuppliers',
        noun: 'List Suppliers',
        display: {
            label: 'listSuppliers',
            description: 'Lists the suppliers.',
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
                    key: 'sort',
                    label: 'List of comma-separated fields for result sorting (minus for desc sorting).',
                    type: 'string',
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
                    key: 'q',
                    label: 'Query for filtering the results.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ListSuppliersResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/entities/suppliers'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                        'fields': bundle.inputData?.['fields'],
                        'fieldset': bundle.inputData?.['fieldset'],
                        'sort': bundle.inputData?.['sort'],
                        'page': bundle.inputData?.['page'],
                        'per_page': bundle.inputData?.['per_page'],
                        'q': bundle.inputData?.['q'],
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
    modifySupplier: {
        key: 'modifySupplier',
        noun: 'Modify Supplier',
        display: {
            label: 'modifySupplier',
            description: 'Modifies the specified supplier.',
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
                    key: 'supplier_id',
                    label: 'The ID of the supplier.',
                    type: 'integer',
                    required: true,
                },
                ...ModifySupplierRequest(),
            ],
            outputFields: [
                ...ModifySupplierResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/entities/suppliers/{supplier_id}'),
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
                        ...ModifySupplierRequestMapping(bundle),
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
