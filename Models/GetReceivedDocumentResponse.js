const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocument = require('./ReceivedDocument').fields;
const ReceivedDocumentMapping = require('./ReceivedDocument').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...ReceivedDocument(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentMapping(bundle, keyPrefix + 'data')),
        }
    },
}
