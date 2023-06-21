const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyInfo = require('./CompanyInfo').fields;
const CompanyInfoMapping = require('./CompanyInfo').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...CompanyInfo(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(CompanyInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
