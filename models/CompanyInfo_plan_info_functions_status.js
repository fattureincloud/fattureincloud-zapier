const _ = require('lodash')
const utils = require('../utils/utils');
const FunctionStatus = require('./FunctionStatus').fields;
const FunctionStatusMapping = require('./FunctionStatus').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...FunctionStatus(keyPrefix + 'ts_digital'),
            ...FunctionStatus(keyPrefix + 'ts_pay'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'ts_digital': utils.removeIfEmpty(FunctionStatusMapping(bundle, keyPrefix + 'ts_digital')),
            'ts_pay': utils.removeIfEmpty(FunctionStatusMapping(bundle, keyPrefix + 'ts_pay')),
        }
    },
}
