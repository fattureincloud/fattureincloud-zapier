const samples = require('../samples/InfoApi');
const ListArchiveCategoriesResponse = require('../models/ListArchiveCategoriesResponse');
const ListCitiesResponse = require('../models/ListCitiesResponse');
const ListCostCentersResponse = require('../models/ListCostCentersResponse');
const ListCountriesResponse = require('../models/ListCountriesResponse');
const ListCurrenciesResponse = require('../models/ListCurrenciesResponse');
const ListDeliveryNotesDefaultCausalsResponse = require('../models/ListDeliveryNotesDefaultCausalsResponse');
const ListDetailedCountriesResponse = require('../models/ListDetailedCountriesResponse');
const ListLanguagesResponse = require('../models/ListLanguagesResponse');
const ListPaymentAccountsResponse = require('../models/ListPaymentAccountsResponse');
const ListPaymentMethodsResponse = require('../models/ListPaymentMethodsResponse');
const ListProductCategoriesResponse = require('../models/ListProductCategoriesResponse');
const ListReceivedDocumentCategoriesResponse = require('../models/ListReceivedDocumentCategoriesResponse');
const ListRevenueCentersResponse = require('../models/ListRevenueCentersResponse');
const ListTemplatesResponse = require('../models/ListTemplatesResponse');
const ListUnitsOfMeasureResponse = require('../models/ListUnitsOfMeasureResponse');
const ListVatTypesResponse = require('../models/ListVatTypesResponse');
const utils = require('../utils/utils');

module.exports = {
    listArchiveCategories: {
        key: 'listArchiveCategories',
        noun: 'Info',
        display: {
            label: 'List Archive Categories',
            description: 'Lists the archive categories.',
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
                ...ListArchiveCategoriesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/archive_categories'),
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
            sample: samples['ListArchiveCategoriesResponseSample']
        }
    },
    listCities: {
        key: 'listCities',
        noun: 'Info',
        display: {
            label: 'List Cities',
            description: 'Lists the Italian cities.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'postal_code',
                    label: 'Postal code for filtering.',
                    type: 'string',
                },
                {
                    key: 'city',
                    label: 'City for filtering (ignored if postal_code is passed).',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ListCitiesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/cities'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'postal_code': bundle.inputData?.['postal_code'],
                        'city': bundle.inputData?.['city'],
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
            sample: samples['ListCitiesResponseSample']
        }
    },
    listCostCenters: {
        key: 'listCostCenters',
        noun: 'Info',
        display: {
            label: 'List Cost Centers',
            description: 'Lists the cost centers.',
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
                ...ListCostCentersResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/cost_centers'),
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
            sample: samples['ListCostCentersResponseSample']
        }
    },
    listCountries: {
        key: 'listCountries',
        noun: 'Info',
        display: {
            label: 'List Countries',
            description: 'Lists the supported countries.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListCountriesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/countries'),
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
            sample: samples['ListCountriesResponseSample']
        }
    },
    listCurrencies: {
        key: 'listCurrencies',
        noun: 'Info',
        display: {
            label: 'List Currencies',
            description: 'Lists the supported currencies.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListCurrenciesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/currencies'),
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
            sample: samples['ListCurrenciesResponseSample']
        }
    },
    listDeliveryNotesDefaultCausals: {
        key: 'listDeliveryNotesDefaultCausals',
        noun: 'Info',
        display: {
            label: 'List Delivery Notes Default Causals',
            description: 'Lists the delivery note default causals.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListDeliveryNotesDefaultCausalsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/dn_causals'),
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
            sample: samples['ListDeliveryNotesDefaultCausalsResponseSample']
        }
    },
    listDetailedCountries: {
        key: 'listDetailedCountries',
        noun: 'Info',
        display: {
            label: 'List Detailed Countries',
            description: 'Lists the supported countries.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListDetailedCountriesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/detailed_countries'),
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
            sample: samples['ListDetailedCountriesResponseSample']
        }
    },
    listLanguages: {
        key: 'listLanguages',
        noun: 'Info',
        display: {
            label: 'List Languages',
            description: 'Lists the supported languages.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListLanguagesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/languages'),
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
            sample: samples['ListLanguagesResponseSample']
        }
    },
    listPaymentAccounts: {
        key: 'listPaymentAccounts',
        noun: 'Info',
        display: {
            label: 'List Payment Accounts',
            description: 'Lists the available payment accounts.',
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
                    key: 'sort',
                    label: 'List of comma-separated fields for result sorting (minus for desc sorting).',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ListPaymentAccountsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/payment_accounts'),
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
                        'sort': bundle.inputData?.['sort'],
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
            sample: samples['ListPaymentAccountsResponseSample']
        }
    },
    listPaymentMethods: {
        key: 'listPaymentMethods',
        noun: 'Info',
        display: {
            label: 'List Payment Methods',
            description: 'Lists the available payment methods.',
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
                    key: 'sort',
                    label: 'List of comma-separated fields for result sorting (minus for desc sorting).',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ListPaymentMethodsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/payment_methods'),
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
                        'sort': bundle.inputData?.['sort'],
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
            sample: samples['ListPaymentMethodsResponseSample']
        }
    },
    listProductCategories: {
        key: 'listProductCategories',
        noun: 'Info',
        display: {
            label: 'List Product Categories',
            description: 'Lists the product categories.',
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
                    key: 'context',
                    label: 'Categories resource type.',
                    type: 'string',
                    required: true,
                    choices: [
                        'products',
                        'issued_documents',
                        'received_documents',
                    ],
                },
            ],
            outputFields: [
                ...ListProductCategoriesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/product_categories'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'context': bundle.inputData?.['context'],
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
            sample: samples['ListProductCategoriesResponseSample']
        }
    },
    listReceivedDocumentCategories: {
        key: 'listReceivedDocumentCategories',
        noun: 'Info',
        display: {
            label: 'List Received Document Categories',
            description: 'Lists the received document categories.',
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
                ...ListReceivedDocumentCategoriesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/received_document_categories'),
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
            sample: samples['ListReceivedDocumentCategoriesResponseSample']
        }
    },
    listRevenueCenters: {
        key: 'listRevenueCenters',
        noun: 'Info',
        display: {
            label: 'List Revenue Centers',
            description: 'Lists the revenue centers.',
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
                ...ListRevenueCentersResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/revenue_centers'),
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
            sample: samples['ListRevenueCentersResponseSample']
        }
    },
    listTemplates: {
        key: 'listTemplates',
        noun: 'Info',
        display: {
            label: 'List Templates',
            description: 'Lists the available templates.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'type',
                    label: 'Type of the templates.',
                    type: 'string',
                    choices: [
                        'all',
                        'standard',
                        'delivery_note',
                        'accompanying_invoice',
                    ],
                },
                {
                    key: 'by_type',
                    label: '[Only if type&#x3D;all] If true, splits the list in objects, grouping templates by type.',
                    type: 'boolean',
                },
            ],
            outputFields: [
                ...ListTemplatesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/templates'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'type': bundle.inputData?.['type'],
                        'by_type': bundle.inputData?.['by_type'],
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
            sample: samples['ListTemplatesResponseSample']
        }
    },
    listUnitsOfMeasure: {
        key: 'listUnitsOfMeasure',
        noun: 'Info',
        display: {
            label: 'List Units of Measure',
            description: 'Lists the units of measure.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListUnitsOfMeasureResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/measures'),
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
            sample: samples['ListUnitsOfMeasureResponseSample']
        }
    },
    listVatTypes: {
        key: 'listVatTypes',
        noun: 'Info',
        display: {
            label: 'List Vat Types',
            description: 'Lists the available vat types.',
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
                ...ListVatTypesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/vat_types'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
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
            sample: samples['ListVatTypesResponseSample']
        }
    },
}
