const _ = require('lodash')
const utils = require('../utils/utils');
const VerifyEInvoiceXmlResponse_data = require('../models/VerifyEInvoiceXmlResponse_data');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...VerifyEInvoiceXmlResponse_data.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(VerifyEInvoiceXmlResponse_data.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
