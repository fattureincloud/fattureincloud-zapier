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
                label: labelPrefix + 'Document unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'type',
                label: labelPrefix + 'Document type.',
                type: 'string',
            },
            {
                key: keyPrefix + 'path',
                label: labelPrefix + 'Document path.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'path': bundle.inputData?.[keyPrefix + 'path'],
        }
    },
}
