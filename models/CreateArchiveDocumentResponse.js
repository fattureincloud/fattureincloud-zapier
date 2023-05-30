const _ = require('lodash')
const utils = require('../utils/utils');
const ArchiveDocument = require('./ArchiveDocument').fields;
const ArchiveDocumentMapping = require('./ArchiveDocument').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...ArchiveDocument(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ArchiveDocumentMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
