const _ = require('lodash')
const utils = require('../utils/utils');
const SendEInvoiceResponse_data = require('./SendEInvoiceResponse_data').fields;
const SendEInvoiceResponse_dataMapping = require('./SendEInvoiceResponse_data').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...SendEInvoiceResponse_data(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(SendEInvoiceResponse_dataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
