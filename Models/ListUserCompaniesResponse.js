const _ = require('lodash')
const utils = require('../utils/utils');
const ListUserCompaniesResponse_data = require('./ListUserCompaniesResponse_data').fields;
const ListUserCompaniesResponse_dataMapping = require('./ListUserCompaniesResponse_data').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...ListUserCompaniesResponse_data(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ListUserCompaniesResponse_dataMapping(bundle, keyPrefix + 'data')),
        }
    },
}
