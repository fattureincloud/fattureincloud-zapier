const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlErrorResponse_error = require('./VerifyEInvoiceXmlErrorResponse_error').fields;
const VerifyEInvoiceXmlErrorResponse_errorMapping = require('./VerifyEInvoiceXmlErrorResponse_error').mapping;
const VerifyEInvoiceXmlErrorResponse_extra = require('./VerifyEInvoiceXmlErrorResponse_extra').fields;
const VerifyEInvoiceXmlErrorResponse_extraMapping = require('./VerifyEInvoiceXmlErrorResponse_extra').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...VerifyEInvoiceXmlErrorResponse_error(`${keyPrefix}error`),
            ...VerifyEInvoiceXmlErrorResponse_extra(`${keyPrefix}extra`),
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
