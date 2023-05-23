const ListEmailsResponse = require('../Models/ListEmailsResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    listEmails: {
        key: 'listEmails',
        noun: 'List emails',
        display: {
            label: 'listEmails',
            description: 'List Emails.',
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
                ...ListEmailsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/emails'),
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
