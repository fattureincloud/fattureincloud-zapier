const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlErrorResponse_error = require('../models/VerifyEInvoiceXmlErrorResponse_error');
const VerifyEInvoiceXmlErrorResponse_extra = require('../models/VerifyEInvoiceXmlErrorResponse_extra');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...VerifyEInvoiceXmlErrorResponse_error.fields(`${keyPrefix}error`, isInput),
            ...VerifyEInvoiceXmlErrorResponse_extra.fields(`${keyPrefix}extra`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'error': utils.removeIfEmpty(VerifyEInvoiceXmlErrorResponse_error.mapping(bundle, `${keyPrefix}error`)),
            'extra': utils.removeIfEmpty(VerifyEInvoiceXmlErrorResponse_extra.mapping(bundle, `${keyPrefix}extra`)),
        }
    },
}
