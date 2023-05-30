const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentPreCreateInfo = require('./IssuedDocumentPreCreateInfo').fields;
const IssuedDocumentPreCreateInfoMapping = require('./IssuedDocumentPreCreateInfo').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...IssuedDocumentPreCreateInfo(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentPreCreateInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
