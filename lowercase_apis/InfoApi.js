const ListArchiveCategoriesResponse = require('../models/ListArchiveCategoriesResponse').fields;
const ListCitiesResponse = require('../models/ListCitiesResponse').fields;
const ListCostCentersResponse = require('../models/ListCostCentersResponse').fields;
const ListCountriesResponse = require('../models/ListCountriesResponse').fields;
const ListCurrenciesResponse = require('../models/ListCurrenciesResponse').fields;
const ListDeliveryNotesDefaultCausalsResponse = require('../models/ListDeliveryNotesDefaultCausalsResponse').fields;
const ListDetailedCountriesResponse = require('../models/ListDetailedCountriesResponse').fields;
const ListLanguagesResponse = require('../models/ListLanguagesResponse').fields;
const ListPaymentAccountsResponse = require('../models/ListPaymentAccountsResponse').fields;
const ListPaymentMethodsResponse = require('../models/ListPaymentMethodsResponse').fields;
const ListProductCategoriesResponse = require('../models/ListProductCategoriesResponse').fields;
const ListReceivedDocumentCategoriesResponse = require('../models/ListReceivedDocumentCategoriesResponse').fields;
const ListRevenueCentersResponse = require('../models/ListRevenueCentersResponse').fields;
const ListTemplatesResponse = require('../models/ListTemplatesResponse').fields;
const ListUnitsOfMeasureResponse = require('../models/ListUnitsOfMeasureResponse').fields;
const ListVatTypesResponse = require('../models/ListVatTypesResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    listArchiveCategories: {
        key: 'listArchiveCategories',
        noun: 'List Archive Categories',
        display: {
            label: 'listArchiveCategories',
            description: 'Lists the archive categories.',
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
                ...ListArchiveCategoriesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/archive_categories'),
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
    listCities: {
        key: 'listCities',
        noun: 'List Cities',
        display: {
            label: 'listCities',
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
                ...ListCitiesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/cities'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
            }
        }
    },
    listCostCenters: {
        key: 'listCostCenters',
        noun: 'List Cost Centers',
        display: {
            label: 'listCostCenters',
            description: 'Lists the cost centers.',
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
                ...ListCostCentersResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/cost_centers'),
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
    listCountries: {
        key: 'listCountries',
        noun: 'List Countries',
        display: {
            label: 'listCountries',
            description: 'Lists the supported countries.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListCountriesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/countries'),
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
    listCurrencies: {
        key: 'listCurrencies',
        noun: 'List Currencies',
        display: {
            label: 'listCurrencies',
            description: 'Lists the supported currencies.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListCurrenciesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/currencies'),
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
    listDeliveryNotesDefaultCausals: {
        key: 'listDeliveryNotesDefaultCausals',
        noun: 'List Delivery Notes Default Causals',
        display: {
            label: 'listDeliveryNotesDefaultCausals',
            description: 'Lists the delivery note default causals.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListDeliveryNotesDefaultCausalsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/dn_causals'),
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
    listDetailedCountries: {
        key: 'listDetailedCountries',
        noun: 'List Detailed Countries',
        display: {
            label: 'listDetailedCountries',
            description: 'Lists the supported countries.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListDetailedCountriesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/detailed_countries'),
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
    listLanguages: {
        key: 'listLanguages',
        noun: 'List Languages',
        display: {
            label: 'listLanguages',
            description: 'Lists the supported languages.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListLanguagesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/languages'),
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
    listPaymentAccounts: {
        key: 'listPaymentAccounts',
        noun: 'List Payment Accounts',
        display: {
            label: 'listPaymentAccounts',
            description: 'Lists the available payment accounts.',
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
                ...ListPaymentAccountsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/payment_accounts'),
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
    listPaymentMethods: {
        key: 'listPaymentMethods',
        noun: 'List Payment Methods',
        display: {
            label: 'listPaymentMethods',
            description: 'Lists the available payment methods.',
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
                ...ListPaymentMethodsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/payment_methods'),
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
    listProductCategories: {
        key: 'listProductCategories',
        noun: 'List Product Categories',
        display: {
            label: 'listProductCategories',
            description: 'Lists the product categories.',
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
                    key: 'context',
                    
                    type: 'string',
                    choices: [
                        'products',
                        'issued_documents',
                        'received_documents',
                    ],
                },
            ],
            outputFields: [
                ...ListProductCategoriesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/product_categories'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
            }
        }
    },
    listReceivedDocumentCategories: {
        key: 'listReceivedDocumentCategories',
        noun: 'List Received Document Categories',
        display: {
            label: 'listReceivedDocumentCategories',
            description: 'Lists the received document categories.',
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
                ...ListReceivedDocumentCategoriesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/received_document_categories'),
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
    listRevenueCenters: {
        key: 'listRevenueCenters',
        noun: 'List Revenue Centers',
        display: {
            label: 'listRevenueCenters',
            description: 'Lists the revenue centers.',
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
                ...ListRevenueCentersResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/revenue_centers'),
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
    listTemplates: {
        key: 'listTemplates',
        noun: 'List Templates',
        display: {
            label: 'listTemplates',
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
                ...ListTemplatesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/templates'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
            }
        }
    },
    listUnitsOfMeasure: {
        key: 'listUnitsOfMeasure',
        noun: 'List Units of Measure',
        display: {
            label: 'listUnitsOfMeasure',
            description: 'Lists the units of measure.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListUnitsOfMeasureResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/info/measures'),
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
    listVatTypes: {
        key: 'listVatTypes',
        noun: 'List Vat Types',
        display: {
            label: 'listVatTypes',
            description: 'Lists the available vat types.',
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
                ...ListVatTypesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/info/vat_types'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
            }
        }
    },
}
