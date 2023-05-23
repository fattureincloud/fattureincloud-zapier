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
                label: labelPrefix + 'Currency code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'symbol',
                label: labelPrefix + 'Currency symbol.',
                type: 'string',
            },
            {
                key: keyPrefix + 'exchange_rate',
                label: labelPrefix + 'Currency exchange rate (EUR to this).',
                type: 'string',
            },
            {
                key: keyPrefix + 'html_symbol',
                label: labelPrefix + 'Currency html code.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'symbol': bundle.inputData?.[keyPrefix + 'symbol'],
            'exchange_rate': bundle.inputData?.[keyPrefix + 'exchange_rate'],
            'html_symbol': bundle.inputData?.[keyPrefix + 'html_symbol'],
        }
    },
}
