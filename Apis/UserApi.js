const GetUserInfoResponse = require('../Models/GetUserInfoResponse').fields;
const ListUserCompaniesResponse = require('../Models/ListUserCompaniesResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    getUserInfo: {
        key: 'getUserInfo',
        noun: 'Get User Info',
        display: {
            label: 'getUserInfo',
            description: 'Gets the current user&#39;s info.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...GetUserInfoResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/user/info'),
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
    listUserCompanies: {
        key: 'listUserCompanies',
        noun: 'List User Companies',
        display: {
            label: 'listUserCompanies',
            description: 'Lists the companies controlled by the current user.',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...ListUserCompaniesResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/user/companies'),
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
