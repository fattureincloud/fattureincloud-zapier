const samples = require('../samples/EmailsApi');
const ListEmailsResponse = require('../models/ListEmailsResponse');
const utils = require('../utils/utils');

module.exports = {
    listEmails: {
        key: 'listEmails',
        noun: 'Emails',
        display: {
            label: 'List Emails',
            description: 'List Emails.',
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
                ...ListEmailsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/emails'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listEmails', response.json);
                    return results;
                })
            },
            sample: samples['ListEmailsResponseSample']
        }
    },
}
