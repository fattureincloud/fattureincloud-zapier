const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentTotals = require('../models/IssuedDocumentTotals');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...IssuedDocumentTotals.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentTotals.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
