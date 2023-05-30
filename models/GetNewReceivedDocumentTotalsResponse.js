const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentTotals = require('./ReceivedDocumentTotals').fields;
const ReceivedDocumentTotalsMapping = require('./ReceivedDocumentTotals').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...ReceivedDocumentTotals(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentTotalsMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
