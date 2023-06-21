const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlResponse_data = require('./VerifyEInvoiceXmlResponse_data').fields;
const VerifyEInvoiceXmlResponse_dataMapping = require('./VerifyEInvoiceXmlResponse_data').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...VerifyEInvoiceXmlResponse_data(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(VerifyEInvoiceXmlResponse_dataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
