const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'attachment_token',
                label: labelPrefix + 'Uploaded attachment token.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'attachment_token': bundle.inputData?.[keyPrefix + 'attachment_token'],
        }
    },
}
