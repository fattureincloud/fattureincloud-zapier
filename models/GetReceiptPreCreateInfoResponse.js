const _ = require('lodash')
const utils = require('../utils/utils');
const ReceiptPreCreateInfo = require('./ReceiptPreCreateInfo').fields;
const ReceiptPreCreateInfoMapping = require('./ReceiptPreCreateInfo').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceiptPreCreateInfo(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceiptPreCreateInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
