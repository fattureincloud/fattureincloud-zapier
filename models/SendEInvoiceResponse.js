const _ = require('lodash')
const utils = require('../utils/utils');
const SendEInvoiceResponse_data = require('../models/SendEInvoiceResponse_data');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...SendEInvoiceResponse_data.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(SendEInvoiceResponse_data.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
