const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocument = require('../models/IssuedDocument');
const IssuedDocumentOptions = require('../models/IssuedDocumentOptions');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...IssuedDocument.fields(`${keyPrefix}data`, isInput),
            ...IssuedDocumentOptions.fields(`${keyPrefix}options`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocument.mapping(bundle, `${keyPrefix}data`)),
            'options': utils.removeIfEmpty(IssuedDocumentOptions.mapping(bundle, `${keyPrefix}options`)),
        }
    },
}
