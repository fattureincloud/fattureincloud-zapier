const _ = require('lodash')
const utils = require('../utils/utils');
const SendEInvoiceRequest_data = require('./SendEInvoiceRequest_data').fields;
const SendEInvoiceRequest_dataMapping = require('./SendEInvoiceRequest_data').mapping;
const SendEInvoiceRequest_options = require('./SendEInvoiceRequest_options').fields;
const SendEInvoiceRequest_optionsMapping = require('./SendEInvoiceRequest_options').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...SendEInvoiceRequest_data(`${keyPrefix}data`),
            ...SendEInvoiceRequest_options(`${keyPrefix}options`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(SendEInvoiceRequest_dataMapping(bundle, `${keyPrefix}data`)),
            'options': utils.removeIfEmpty(SendEInvoiceRequest_optionsMapping(bundle, `${keyPrefix}options`)),
        }
    },
}
