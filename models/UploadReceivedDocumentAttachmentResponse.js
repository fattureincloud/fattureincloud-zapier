const _ = require('lodash')
const utils = require('../utils/utils');
const AttachmentData = require('../models/AttachmentData');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...AttachmentData.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(AttachmentData.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
