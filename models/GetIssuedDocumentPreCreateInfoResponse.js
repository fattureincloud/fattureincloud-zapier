const utils = require('../utils/utils');
const IssuedDocumentPreCreateInfo = require('../models/IssuedDocumentPreCreateInfo');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IssuedDocumentPreCreateInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(IssuedDocumentPreCreateInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
