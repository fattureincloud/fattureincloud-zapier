const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentTotals = require('./IssuedDocumentTotals').fields;
const IssuedDocumentTotalsMapping = require('./IssuedDocumentTotals').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...IssuedDocumentTotals(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentTotalsMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
