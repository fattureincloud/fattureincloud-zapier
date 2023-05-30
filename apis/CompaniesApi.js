const GetCompanyInfoResponse = require('../models/GetCompanyInfoResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    getCompanyInfo: {
        key: 'getCompanyInfo',
        noun: 'Companies',
        display: {
            label: 'getCompanyInfo',
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
                ...GetCompanyInfoResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/company/info'),
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
}
