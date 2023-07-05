const utils = require('../utils/utils');
const IssuedDocumentTotals = require('../models/IssuedDocumentTotals');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IssuedDocumentTotals.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(IssuedDocumentTotals.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
