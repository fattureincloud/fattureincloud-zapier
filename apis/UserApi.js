const samples = require('../samples/UserApi');
const GetUserInfoResponse = require('../models/GetUserInfoResponse');
const ListUserCompaniesResponse = require('../models/ListUserCompaniesResponse');
const utils = require('../utils/utils');

module.exports = {
    getUserInfo: {
        key: 'getUserInfo',
        noun: 'User',
        display: {
            label: 'Get User Info',
            description: 'Gets the current user&#39;s info.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...GetUserInfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/user/info'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserInfo', response.json);
                    return results;
                })
            },
            sample: samples['GetUserInfoResponseSample']
        }
    },
    listUserCompanies: {
        key: 'listUserCompanies',
        noun: 'User',
        display: {
            label: 'List User Companies',
            description: 'Lists the companies controlled by the current user.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListUserCompaniesResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/user/companies'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listUserCompanies', response.json);
                    return results;
                })
            },
            sample: samples['ListUserCompaniesResponseSample']
        }
    },
}
