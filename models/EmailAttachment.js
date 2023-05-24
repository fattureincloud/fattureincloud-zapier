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
                key: keyPrefix + 'filename',
                label: labelPrefix + 'Email attachment filename.',
                type: 'string',
            },
            {
                key: keyPrefix + 'url',
                label: labelPrefix + 'Email attachment url.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'filename': bundle.inputData?.[keyPrefix + 'filename'],
            'url': bundle.inputData?.[keyPrefix + 'url'],
        }
    },
}
