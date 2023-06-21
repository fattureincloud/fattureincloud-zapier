const samples = require('../samples/SettingsApi.json');
const CreatePaymentAccountRequest = require('../models/CreatePaymentAccountRequest').fields;
const CreatePaymentAccountRequestMapping = require('../models/CreatePaymentAccountRequest').mapping;
const CreatePaymentAccountResponse = require('../models/CreatePaymentAccountResponse').fields;
const CreatePaymentMethodRequest = require('../models/CreatePaymentMethodRequest').fields;
const CreatePaymentMethodRequestMapping = require('../models/CreatePaymentMethodRequest').mapping;
const CreatePaymentMethodResponse = require('../models/CreatePaymentMethodResponse').fields;
const CreateVatTypeRequest = require('../models/CreateVatTypeRequest').fields;
const CreateVatTypeRequestMapping = require('../models/CreateVatTypeRequest').mapping;
const CreateVatTypeResponse = require('../models/CreateVatTypeResponse').fields;
const GetPaymentAccountResponse = require('../models/GetPaymentAccountResponse').fields;
const GetPaymentMethodResponse = require('../models/GetPaymentMethodResponse').fields;
const GetVatTypeResponse = require('../models/GetVatTypeResponse').fields;
const ModifyPaymentAccountRequest = require('../models/ModifyPaymentAccountRequest').fields;
const ModifyPaymentAccountRequestMapping = require('../models/ModifyPaymentAccountRequest').mapping;
const ModifyPaymentAccountResponse = require('../models/ModifyPaymentAccountResponse').fields;
const ModifyPaymentMethodRequest = require('../models/ModifyPaymentMethodRequest').fields;
const ModifyPaymentMethodRequestMapping = require('../models/ModifyPaymentMethodRequest').mapping;
const ModifyPaymentMethodResponse = require('../models/ModifyPaymentMethodResponse').fields;
const ModifyVatTypeRequest = require('../models/ModifyVatTypeRequest').fields;
const ModifyVatTypeRequestMapping = require('../models/ModifyVatTypeRequest').mapping;
const ModifyVatTypeResponse = require('../models/ModifyVatTypeResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createPaymentAccount: {
        key: 'createPaymentAccount',
        noun: 'Settings',
        display: {
            label: 'createPaymentAccount',
            description: 'Creates a new payment account.',
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
                ...CreatePaymentAccountRequest(),
            ],
            outputFields: [
                ...CreatePaymentAccountResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_accounts'),
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
                        ...CreatePaymentAccountRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreatePaymentAccountResponseSample']
        }
    },
    createPaymentMethod: {
        key: 'createPaymentMethod',
        noun: 'Settings',
        display: {
            label: 'createPaymentMethod',
            description: 'Creates a new payment method.',
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
                ...CreatePaymentMethodRequest(),
            ],
            outputFields: [
                ...CreatePaymentMethodResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_methods'),
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
                        ...CreatePaymentMethodRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreatePaymentMethodResponseSample']
        }
    },
    createVatType: {
        key: 'createVatType',
        noun: 'Settings',
        display: {
            label: 'createVatType',
            description: 'Creates a vat type.',
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
                ...CreateVatTypeRequest(),
            ],
            outputFields: [
                ...CreateVatTypeResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/vat_types'),
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
                        ...CreateVatTypeRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreateVatTypeResponseSample']
        }
    },
    deletePaymentAccount: {
        key: 'deletePaymentAccount',
        noun: 'Settings',
        display: {
            label: 'deletePaymentAccount',
            description: 'Deletes the specified payment account.',
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
                    key: 'payment_account_id',
                    label: 'The Referred Payment Account Id.',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_accounts/{payment_account_id}'),
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
            },
            sample: { data: {} }
        }
    },
    deletePaymentMethod: {
        key: 'deletePaymentMethod',
        noun: 'Settings',
        display: {
            label: 'deletePaymentMethod',
            description: 'Deletes the specified payment method.',
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
                    key: 'payment_method_id',
                    label: 'The Referred Payment Method Id.',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_methods/{payment_method_id}'),
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
            },
            sample: { data: {} }
        }
    },
    deleteVatType: {
        key: 'deleteVatType',
        noun: 'Settings',
        display: {
            label: 'deleteVatType',
            description: 'Deletes the specified vat type.',
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
                    key: 'vat_type_id',
                    label: 'The Referred Vat Type Id.',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/vat_types/{vat_type_id}'),
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
            },
            sample: { data: {} }
        }
    },
    getPaymentAccount: {
        key: 'getPaymentAccount',
        noun: 'Settings',
        display: {
            label: 'getPaymentAccount',
            description: 'Gets the specified payment account.',
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
                    key: 'payment_account_id',
                    label: 'The Referred Payment Account Id.',
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
                ...GetPaymentAccountResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_accounts/{payment_account_id}'),
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
            },
            sample: samples['GetPaymentAccountResponseSample']
        }
    },
    getPaymentMethod: {
        key: 'getPaymentMethod',
        noun: 'Settings',
        display: {
            label: 'getPaymentMethod',
            description: 'Gets the specified payment method.',
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
                    key: 'payment_method_id',
                    label: 'The Referred Payment Method Id.',
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
                ...GetPaymentMethodResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_methods/{payment_method_id}'),
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
            },
            sample: samples['GetPaymentMethodResponseSample']
        }
    },
    getVatType: {
        key: 'getVatType',
        noun: 'Settings',
        display: {
            label: 'getVatType',
            description: 'Gets the specified vat type.',
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
                    key: 'vat_type_id',
                    label: 'The Referred Vat Type Id.',
                    type: 'integer',
                    required: true,
                },
            ],
            outputFields: [
                ...GetVatTypeResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/vat_types/{vat_type_id}'),
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
            },
            sample: samples['GetVatTypeResponseSample']
        }
    },
    modifyPaymentAccount: {
        key: 'modifyPaymentAccount',
        noun: 'Settings',
        display: {
            label: 'modifyPaymentAccount',
            description: 'Modifies the specified payment account.',
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
                    key: 'payment_account_id',
                    label: 'The Referred Payment Account Id.',
                    type: 'integer',
                    required: true,
                },
                ...ModifyPaymentAccountRequest(),
            ],
            outputFields: [
                ...ModifyPaymentAccountResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_accounts/{payment_account_id}'),
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
                        ...ModifyPaymentAccountRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyPaymentAccountResponseSample']
        }
    },
    modifyPaymentMethod: {
        key: 'modifyPaymentMethod',
        noun: 'Settings',
        display: {
            label: 'modifyPaymentMethod',
            description: 'Modifies the specified payment method.',
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
                    key: 'payment_method_id',
                    label: 'The Referred Payment Method Id.',
                    type: 'integer',
                    required: true,
                },
                ...ModifyPaymentMethodRequest(),
            ],
            outputFields: [
                ...ModifyPaymentMethodResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_methods/{payment_method_id}'),
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
                        ...ModifyPaymentMethodRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyPaymentMethodResponseSample']
        }
    },
    modifyVatType: {
        key: 'modifyVatType',
        noun: 'Settings',
        display: {
            label: 'modifyVatType',
            description: 'Modifies the specified vat type.',
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
                    key: 'vat_type_id',
                    label: 'The Referred Vat Type Id.',
                    type: 'integer',
                    required: true,
                },
                ...ModifyVatTypeRequest(),
            ],
            outputFields: [
                ...ModifyVatTypeResponse('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/vat_types/{vat_type_id}'),
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
                        ...ModifyVatTypeRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyVatTypeResponseSample']
        }
    },
}
