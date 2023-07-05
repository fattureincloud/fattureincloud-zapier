const utils = require('../utils/utils');
const VerifyEInvoiceXmlErrorResponse_error_validation_result = require('../models/VerifyEInvoiceXmlErrorResponse_error_validation_result');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            ...VerifyEInvoiceXmlErrorResponse_error_validation_result.fields(`${keyPrefix}validation_result`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'validation_result': utils.removeIfEmpty(VerifyEInvoiceXmlErrorResponse_error_validation_result.mapping(bundle, `${keyPrefix}validation_result`)),
        }
    },
}
