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
                key: keyPrefix + 'postal_code',
                label: labelPrefix + 'City postal code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'city',
                label: labelPrefix + 'City name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'province',
                label: labelPrefix + 'Province.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'postal_code': bundle.inputData?.[keyPrefix + 'postal_code'],
            'city': bundle.inputData?.[keyPrefix + 'city'],
            'province': bundle.inputData?.[keyPrefix + 'province'],
        }
    },
}
