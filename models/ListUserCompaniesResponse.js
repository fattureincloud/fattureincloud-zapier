const _ = require('lodash')
const utils = require('../utils/utils');
const ListUserCompaniesResponse_data = require('./ListUserCompaniesResponse_data').fields;
const ListUserCompaniesResponse_dataMapping = require('./ListUserCompaniesResponse_data').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ListUserCompaniesResponse_data(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ListUserCompaniesResponse_dataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
