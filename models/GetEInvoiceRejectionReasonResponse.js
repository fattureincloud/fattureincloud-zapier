const _ = require('lodash')
const utils = require('../utils/utils');
const EInvoiceRejectionReason = require('./EInvoiceRejectionReason').fields;
const EInvoiceRejectionReasonMapping = require('./EInvoiceRejectionReason').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...EInvoiceRejectionReason(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EInvoiceRejectionReasonMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
