const utils = require('../utils/utils');
const ReceivedDocumentInfo = require('../models/ReceivedDocumentInfo');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ReceivedDocumentInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
