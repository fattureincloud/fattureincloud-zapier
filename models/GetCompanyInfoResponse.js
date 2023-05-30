const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyInfo = require('./CompanyInfo').fields;
const CompanyInfoMapping = require('./CompanyInfo').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...CompanyInfo(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(CompanyInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
