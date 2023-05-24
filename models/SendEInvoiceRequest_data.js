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
                key: keyPrefix + 'cassa_type',
                label: labelPrefix + 'Value of TipoCassa used (optional, override the company default value).',
                type: 'string',
            },
            {
                key: keyPrefix + 'withholding_tax_causal',
                label: labelPrefix + 'Value of CausalePagamento used (optional, override the company default value).',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'cassa_type': bundle.inputData?.[keyPrefix + 'cassa_type'],
            'withholding_tax_causal': bundle.inputData?.[keyPrefix + 'withholding_tax_causal'],
        }
    },
}
