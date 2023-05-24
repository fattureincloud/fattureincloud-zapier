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
                key: keyPrefix + 'name',
                label: labelPrefix + 'Response message.',
                type: 'string',
            },
            {
                key: keyPrefix + 'date',
                label: labelPrefix + 'E-invoice sent date.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'date': bundle.inputData?.[keyPrefix + 'date'],
        }
    },
}
