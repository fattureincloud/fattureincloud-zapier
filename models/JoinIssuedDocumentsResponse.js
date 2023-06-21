const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocument = require('./IssuedDocument').fields;
const IssuedDocumentMapping = require('./IssuedDocument').mapping;
const IssuedDocumentOptions = require('./IssuedDocumentOptions').fields;
const IssuedDocumentOptionsMapping = require('./IssuedDocumentOptions').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...IssuedDocument(`${keyPrefix}data`, isInput),
            ...IssuedDocumentOptions(`${keyPrefix}options`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentMapping(bundle, `${keyPrefix}data`)),
            'options': utils.removeIfEmpty(IssuedDocumentOptionsMapping(bundle, `${keyPrefix}options`)),
        }
    },
}
