const _ = require('lodash')
const utils = require('../utils/utils');
const SendEInvoiceResponse_data = require('./SendEInvoiceResponse_data').fields;
const SendEInvoiceResponse_dataMapping = require('./SendEInvoiceResponse_data').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...SendEInvoiceResponse_data(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(SendEInvoiceResponse_dataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
