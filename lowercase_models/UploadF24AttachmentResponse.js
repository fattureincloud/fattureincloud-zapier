const _ = require('lodash')
const utils = require('../utils/utils');
const AttachmentData = require('./AttachmentData').fields;
const AttachmentDataMapping = require('./AttachmentData').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...AttachmentData(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(AttachmentDataMapping(bundle, keyPrefix + 'data')),
        }
    },
}
