const _ = require('lodash')
const utils = require('../utils/utils');
const AttachmentData = require('./AttachmentData').fields;
const AttachmentDataMapping = require('./AttachmentData').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...AttachmentData(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(AttachmentDataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
