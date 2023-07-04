const _ = require('lodash')
const utils = require('../utils/utils');
const ArchiveDocument = require('../models/ArchiveDocument');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ArchiveDocument.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ArchiveDocument.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
