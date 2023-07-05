const utils = require('../utils/utils');
const EInvoiceRejectionReason = require('../models/EInvoiceRejectionReason');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...EInvoiceRejectionReason.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(EInvoiceRejectionReason.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
