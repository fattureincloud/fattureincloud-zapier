const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentInfo = require('../models/ReceivedDocumentInfo');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceivedDocumentInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocumentInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
