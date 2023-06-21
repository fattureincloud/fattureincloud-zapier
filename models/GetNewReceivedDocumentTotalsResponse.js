const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentTotals = require('./ReceivedDocumentTotals').fields;
const ReceivedDocumentTotalsMapping = require('./ReceivedDocumentTotals').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceivedDocumentTotals(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentTotalsMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
