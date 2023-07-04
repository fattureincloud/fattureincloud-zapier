const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentMethod = require('../models/PaymentMethod');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...PaymentMethod.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(PaymentMethod.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
