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
                key: keyPrefix + 'code',
                label: labelPrefix + 'Language code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Language extended name.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'code': bundle.inputData?.[keyPrefix + 'code'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
        }
    },
}
