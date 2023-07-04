const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccount = require('../models/PaymentAccount');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...PaymentAccount.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(PaymentAccount.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
