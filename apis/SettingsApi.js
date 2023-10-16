const samples = require('../samples/SettingsApi');
const CreatePaymentAccountRequest = require('../models/CreatePaymentAccountRequest');
const CreatePaymentAccountResponse = require('../models/CreatePaymentAccountResponse');
const CreatePaymentMethodRequest = require('../models/CreatePaymentMethodRequest');
const CreatePaymentMethodResponse = require('../models/CreatePaymentMethodResponse');
const CreateVatTypeRequest = require('../models/CreateVatTypeRequest');
const CreateVatTypeResponse = require('../models/CreateVatTypeResponse');
const GetPaymentAccountResponse = require('../models/GetPaymentAccountResponse');
const GetPaymentMethodResponse = require('../models/GetPaymentMethodResponse');
const GetVatTypeResponse = require('../models/GetVatTypeResponse');
const ModifyPaymentAccountRequest = require('../models/ModifyPaymentAccountRequest');
const ModifyPaymentAccountResponse = require('../models/ModifyPaymentAccountResponse');
const ModifyPaymentMethodRequest = require('../models/ModifyPaymentMethodRequest');
const ModifyPaymentMethodResponse = require('../models/ModifyPaymentMethodResponse');
const ModifyVatTypeRequest = require('../models/ModifyVatTypeRequest');
const ModifyVatTypeResponse = require('../models/ModifyVatTypeResponse');
const utils = require('../utils/utils');

module.exports = {
    createPaymentAccount: {
        key: 'createPaymentAccount',
        noun: 'Settings',
        display: {
            label: 'Create Payment Account',
            description: 'Creates a new payment account.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                },
                ...CreatePaymentAccountRequest.fields(),
            ],
            outputFields: [
                ...CreatePaymentAccountResponse.fields('', false),
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
                        ...CreatePaymentAccountRequest.mapping(bundle),
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
            label: 'Create Payment Method',
            description: 'Creates a new payment method.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                },
                ...CreatePaymentMethodRequest.fields(),
            ],
            outputFields: [
                ...CreatePaymentMethodResponse.fields('', false),
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
                        ...CreatePaymentMethodRequest.mapping(bundle),
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
            label: 'Create Vat Type',
            description: 'Creates a vat type.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                    required: true,
                },
                ...CreateVatTypeRequest.fields(),
            ],
            outputFields: [
                ...CreateVatTypeResponse.fields('', false),
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
                        ...CreateVatTypeRequest.mapping(bundle),
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
            label: 'Delete Payment Account',
            description: 'Deletes the specified payment account.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
    deletePaymentMethod: {
        key: 'deletePaymentMethod',
        noun: 'Settings',
        display: {
            label: 'Delete Payment Method',
            description: 'Deletes the specified payment method.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
    deleteVatType: {
        key: 'deleteVatType',
        noun: 'Settings',
        display: {
            label: 'Delete Vat Type',
            description: 'Deletes the specified vat type.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
    getPaymentAccount: {
        key: 'getPaymentAccount',
        noun: 'Settings',
        display: {
            label: 'Get Payment Account',
            description: 'Gets the specified payment account.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
                ...GetPaymentAccountResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_accounts/{payment_account_id}'),
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
            sample: samples['GetPaymentAccountResponseSample']
        }
    },
    getPaymentMethod: {
        key: 'getPaymentMethod',
        noun: 'Settings',
        display: {
            label: 'Get Payment Method',
            description: 'Gets the specified payment method.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
                ...GetPaymentMethodResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/payment_methods/{payment_method_id}'),
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
            sample: samples['GetPaymentMethodResponseSample']
        }
    },
    getVatType: {
        key: 'getVatType',
        noun: 'Settings',
        display: {
            label: 'Get Vat Type',
            description: 'Gets the specified vat type.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
                ...GetVatTypeResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/settings/vat_types/{vat_type_id}'),
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
            sample: samples['GetVatTypeResponseSample']
        }
    },
    modifyPaymentAccount: {
        key: 'modifyPaymentAccount',
        noun: 'Settings',
        display: {
            label: 'Modify Payment Account',
            description: 'Modifies the specified payment account.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
                ...ModifyPaymentAccountRequest.fields(),
            ],
            outputFields: [
                ...ModifyPaymentAccountResponse.fields('', false),
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
                        ...ModifyPaymentAccountRequest.mapping(bundle),
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
            label: 'Modify Payment Method',
            description: 'Modifies the specified payment method.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
                ...ModifyPaymentMethodRequest.fields(),
            ],
            outputFields: [
                ...ModifyPaymentMethodResponse.fields('', false),
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
                        ...ModifyPaymentMethodRequest.mapping(bundle),
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
            label: 'Modify Vat Type',
            description: 'Modifies the specified vat type.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
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
                ...ModifyVatTypeRequest.fields(),
            ],
            outputFields: [
                ...ModifyVatTypeResponse.fields('', false),
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
                        ...ModifyVatTypeRequest.mapping(bundle),
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
