const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocument = require('./IssuedDocument').fields;
const IssuedDocumentMapping = require('./IssuedDocument').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}data`,
                label: `${keyPrefix}data]`,
                children: IssuedDocument(`${keyPrefix}data`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}data`]),
        }
    },
}
