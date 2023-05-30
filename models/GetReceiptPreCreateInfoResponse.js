const _ = require('lodash')
const utils = require('../utils/utils');
const ReceiptPreCreateInfo = require('./ReceiptPreCreateInfo').fields;
const ReceiptPreCreateInfoMapping = require('./ReceiptPreCreateInfo').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...ReceiptPreCreateInfo(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceiptPreCreateInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
