const _ = require('lodash')
const utils = require('../utils/utils');
const ListUserCompaniesResponse_data = require('../models/ListUserCompaniesResponse_data');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ListUserCompaniesResponse_data.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ListUserCompaniesResponse_data.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
