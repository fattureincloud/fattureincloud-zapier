const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlResponse_data = require('./VerifyEInvoiceXmlResponse_data').fields;
const VerifyEInvoiceXmlResponse_dataMapping = require('./VerifyEInvoiceXmlResponse_data').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...VerifyEInvoiceXmlResponse_data(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(VerifyEInvoiceXmlResponse_dataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
