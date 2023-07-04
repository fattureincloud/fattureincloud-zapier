const _ = require('lodash')
const utils = require('../utils/utils');
const EInvoiceRejectionReason = require('../models/EInvoiceRejectionReason');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...EInvoiceRejectionReason.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EInvoiceRejectionReason.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
