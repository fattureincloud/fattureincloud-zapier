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
                key: keyPrefix + 'amount_net',
                
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_vat',
                
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'amount_net': bundle.inputData?.[keyPrefix + 'amount_net'],
            'amount_vat': bundle.inputData?.[keyPrefix + 'amount_vat'],
        }
    },
}
