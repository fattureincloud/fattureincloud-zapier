const utils = require('../utils/utils');
const IssuedDocument = require('../models/IssuedDocument');
const IssuedDocumentOptions = require('../models/IssuedDocumentOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IssuedDocument.fields(`${keyPrefix}data`, isInput),
            ...IssuedDocumentOptions.fields(`${keyPrefix}options`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(IssuedDocument.mapping(bundle, `${keyPrefix}data`)),
            'options': utils.removeIfEmpty(IssuedDocumentOptions.mapping(bundle, `${keyPrefix}options`)),
        }
    },
}
