const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentInfo = require('./ReceivedDocumentInfo').fields;
const ReceivedDocumentInfoMapping = require('./ReceivedDocumentInfo').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...ReceivedDocumentInfo(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentInfoMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
