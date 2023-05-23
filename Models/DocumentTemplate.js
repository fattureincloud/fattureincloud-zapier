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
                key: keyPrefix + 'id',
                label: labelPrefix + 'Unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Template name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'type',
                label: labelPrefix + 'Template type.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
        }
    },
}
