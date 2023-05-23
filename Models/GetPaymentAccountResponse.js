const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...PaymentAccount(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'data')),
        }
    },
}
