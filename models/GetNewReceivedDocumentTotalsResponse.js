const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentTotals = require('../models/ReceivedDocumentTotals');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceivedDocumentTotals.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentTotals.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
