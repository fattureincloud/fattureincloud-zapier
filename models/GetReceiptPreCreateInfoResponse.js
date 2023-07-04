const _ = require('lodash')
const utils = require('../utils/utils');
const ReceiptPreCreateInfo = require('../models/ReceiptPreCreateInfo');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceiptPreCreateInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceiptPreCreateInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
