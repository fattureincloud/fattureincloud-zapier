const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentPreCreateInfo = require('./IssuedDocumentPreCreateInfo').fields;
const IssuedDocumentPreCreateInfoMapping = require('./IssuedDocumentPreCreateInfo').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...IssuedDocumentPreCreateInfo(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentPreCreateInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
