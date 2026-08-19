const utils = require('../utils/utils');
const SendEInvoiceRequest_data = require('../models/SendEInvoiceRequest_data');
const SendEInvoiceRequest_options = require('../models/SendEInvoiceRequest_options');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...SendEInvoiceRequest_data.fields(`${keyPrefix}data`, isInput),
            ...SendEInvoiceRequest_options.fields(`${keyPrefix}options`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(SendEInvoiceRequest_data.mapping(bundle, `${keyPrefix}data`)),
            'options': utils.removeIfEmpty(SendEInvoiceRequest_options.mapping(bundle, `${keyPrefix}options`)),
        }
    },
}
