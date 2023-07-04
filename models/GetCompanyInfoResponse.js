const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyInfo = require('../models/CompanyInfo');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...CompanyInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(CompanyInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
