const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentInfo = require('./ReceivedDocumentInfo').fields;
const ReceivedDocumentInfoMapping = require('./ReceivedDocumentInfo').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceivedDocumentInfo(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
