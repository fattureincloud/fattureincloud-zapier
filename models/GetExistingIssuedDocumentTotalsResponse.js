const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentTotals = require('./IssuedDocumentTotals').fields;
const IssuedDocumentTotalsMapping = require('./IssuedDocumentTotals').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...IssuedDocumentTotals(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentTotalsMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
