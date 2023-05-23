const _ = require('lodash')
const utils = require('../utils/utils');
const EInvoiceRejectionReason = require('./EInvoiceRejectionReason').fields;
const EInvoiceRejectionReasonMapping = require('./EInvoiceRejectionReason').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...EInvoiceRejectionReason(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EInvoiceRejectionReasonMapping(bundle, keyPrefix + 'data')),
        }
    },
}
