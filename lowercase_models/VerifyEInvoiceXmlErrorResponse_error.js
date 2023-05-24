const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlErrorResponse_error_validation_result = require('./VerifyEInvoiceXmlErrorResponse_error_validation_result').fields;
const VerifyEInvoiceXmlErrorResponse_error_validation_resultMapping = require('./VerifyEInvoiceXmlErrorResponse_error_validation_result').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'message',
                
                type: 'string',
            },
            ...VerifyEInvoiceXmlErrorResponse_error_validation_result(keyPrefix + 'validation_result'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'message': bundle.inputData?.[keyPrefix + 'message'],
            'validation_result': utils.removeIfEmpty(VerifyEInvoiceXmlErrorResponse_error_validation_resultMapping(bundle, keyPrefix + 'validation_result')),
        }
    },
}
