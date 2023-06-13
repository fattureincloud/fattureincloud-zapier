const samples = require('../samples/UserApi.json');
const GetUserInfoResponse = require('../models/GetUserInfoResponse').fields;
const ListUserCompaniesResponse = require('../models/ListUserCompaniesResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    getUserInfo: {
        key: 'getUserInfo',
        noun: 'User',
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
            },
            sample: samples['GetUserInfoResponseSample']
        }
    },
    listUserCompanies: {
        key: 'listUserCompanies',
        noun: 'User',
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
            },
            sample: samples['ListUserCompaniesResponseSample']
        }
    },
}
