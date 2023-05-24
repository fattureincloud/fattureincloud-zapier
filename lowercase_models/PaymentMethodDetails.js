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
                key: keyPrefix + 'title',
                label: labelPrefix + 'Details title.',
                type: 'string',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Details description.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'title': bundle.inputData?.[keyPrefix + 'title'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
        }
    },
}
