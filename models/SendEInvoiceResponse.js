const utils = require('../utils/utils');
const SendEInvoiceResponse_data = require('../models/SendEInvoiceResponse_data');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...SendEInvoiceResponse_data.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(SendEInvoiceResponse_data.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
