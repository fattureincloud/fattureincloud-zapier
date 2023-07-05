const utils = require('../utils/utils');
const VerifyEInvoiceXmlResponse_data = require('../models/VerifyEInvoiceXmlResponse_data');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...VerifyEInvoiceXmlResponse_data.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(VerifyEInvoiceXmlResponse_data.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
