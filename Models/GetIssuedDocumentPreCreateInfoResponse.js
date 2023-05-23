const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentPreCreateInfo = require('./IssuedDocumentPreCreateInfo').fields;
const IssuedDocumentPreCreateInfoMapping = require('./IssuedDocumentPreCreateInfo').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...IssuedDocumentPreCreateInfo(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentPreCreateInfoMapping(bundle, keyPrefix + 'data')),
        }
    },
}
