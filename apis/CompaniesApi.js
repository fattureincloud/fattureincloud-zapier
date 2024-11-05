const samples = require('../samples/CompaniesApi');
const GetCompanyInfoResponse = require('../models/GetCompanyInfoResponse');
const GetCompanyPlanUsageResponse = require('../models/GetCompanyPlanUsageResponse');
const utils = require('../utils/utils');

module.exports = {
    getCompanyInfo: {
        key: 'getCompanyInfo',
        noun: 'Companies',
        display: {
            label: 'Get Company Info',
            description: 'Gets the company detailed info.',
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
                ...GetCompanyInfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/company/info'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCompanyInfo', response.json);
                    return results;
                })
            },
            sample: samples['GetCompanyInfoResponseSample']
        }
    },
    getCompanyPlanUsage: {
        key: 'getCompanyPlanUsage',
        noun: 'Companies',
        display: {
            label: 'Get Company Plan Usage',
            description: 'Gets the company limits usage.',
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
                    key: 'category',
                    label: 'Category',
                    type: 'string',
                    required: true,
                    choices: [
                        'clients',
                        'suppliers',
                        'products',
                        'documents',
                    ],
                },
            ],
            outputFields: [
                ...GetCompanyPlanUsageResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/company/plan_usage'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'category': bundle.inputData?.['category'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCompanyPlanUsage', response.json);
                    return results;
                })
            },
            sample: samples['GetCompanyPlanUsageResponseSample']
        }
    },
}
