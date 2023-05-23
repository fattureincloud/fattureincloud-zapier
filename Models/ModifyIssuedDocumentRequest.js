const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocument = require('./IssuedDocument').fields;
const IssuedDocumentMapping = require('./IssuedDocument').mapping;
const IssuedDocumentOptions = require('./IssuedDocumentOptions').fields;
const IssuedDocumentOptionsMapping = require('./IssuedDocumentOptions').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...IssuedDocument(keyPrefix + 'data'),
            ...IssuedDocumentOptions(keyPrefix + 'options'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentMapping(bundle, keyPrefix + 'data')),
            'options': utils.removeIfEmpty(IssuedDocumentOptionsMapping(bundle, keyPrefix + 'options')),
        }
    },
}
