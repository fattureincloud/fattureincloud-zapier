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
                key: keyPrefix + 'net',
                label: labelPrefix + 'Monthly total net amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'gross',
                label: labelPrefix + 'Monthly total gross amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'count',
                label: labelPrefix + 'Monthly total receipt number.',
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'net': bundle.inputData?.[keyPrefix + 'net'],
            'gross': bundle.inputData?.[keyPrefix + 'gross'],
            'count': bundle.inputData?.[keyPrefix + 'count'],
        }
    },
}
