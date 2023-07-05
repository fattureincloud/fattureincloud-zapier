const utils = require('../utils/utils');
const ReceivedDocumentTotals = require('../models/ReceivedDocumentTotals');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ReceivedDocumentTotals.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentTotals.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
