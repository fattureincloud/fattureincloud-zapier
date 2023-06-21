const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlErrorResponse_error = require('./VerifyEInvoiceXmlErrorResponse_error').fields;
const VerifyEInvoiceXmlErrorResponse_errorMapping = require('./VerifyEInvoiceXmlErrorResponse_error').mapping;
const VerifyEInvoiceXmlErrorResponse_extra = require('./VerifyEInvoiceXmlErrorResponse_extra').fields;
const VerifyEInvoiceXmlErrorResponse_extraMapping = require('./VerifyEInvoiceXmlErrorResponse_extra').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...VerifyEInvoiceXmlErrorResponse_error(`${keyPrefix}error`, isInput),
            ...VerifyEInvoiceXmlErrorResponse_extra(`${keyPrefix}extra`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'error': utils.removeIfEmpty(VerifyEInvoiceXmlErrorResponse_errorMapping(bundle, `${keyPrefix}error`)),
            'extra': utils.removeIfEmpty(VerifyEInvoiceXmlErrorResponse_extraMapping(bundle, `${keyPrefix}extra`)),
        }
    },
}
