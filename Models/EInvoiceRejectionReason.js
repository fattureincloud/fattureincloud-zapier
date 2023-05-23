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
                key: keyPrefix + 'reason',
                label: labelPrefix + 'Rejection reason.',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_status',
                label: labelPrefix + 'E-invoice status.',
                type: 'string',
            },
            {
                key: keyPrefix + 'solution',
                label: labelPrefix + 'Error solution.',
                type: 'string',
            },
            {
                key: keyPrefix + 'code',
                label: labelPrefix + 'Error code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'date',
                label: labelPrefix + 'Rejection date.',
                type: 'datetime',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'reason': bundle.inputData?.[keyPrefix + 'reason'],
            'ei_status': bundle.inputData?.[keyPrefix + 'ei_status'],
            'solution': bundle.inputData?.[keyPrefix + 'solution'],
            'code': bundle.inputData?.[keyPrefix + 'code'],
            'date': bundle.inputData?.[keyPrefix + 'date'],
        }
    },
}
