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
                label: labelPrefix + 'Total net amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_vat',
                label: labelPrefix + 'Total vat amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_gross',
                label: labelPrefix + 'Total gross amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_withholding_tax',
                label: labelPrefix + 'Total withholding tax amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_other_withholding_tax',
                label: labelPrefix + 'Total other withholding tax amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_due',
                label: labelPrefix + 'Total amount due.',
                type: 'number',
            },
            {
                key: keyPrefix + 'payments_sum',
                label: labelPrefix + 'Payments sum.',
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'amount_net': bundle.inputData?.[keyPrefix + 'amount_net'],
            'amount_vat': bundle.inputData?.[keyPrefix + 'amount_vat'],
            'amount_gross': bundle.inputData?.[keyPrefix + 'amount_gross'],
            'amount_withholding_tax': bundle.inputData?.[keyPrefix + 'amount_withholding_tax'],
            'amount_other_withholding_tax': bundle.inputData?.[keyPrefix + 'amount_other_withholding_tax'],
            'amount_due': bundle.inputData?.[keyPrefix + 'amount_due'],
            'payments_sum': bundle.inputData?.[keyPrefix + 'payments_sum'],
        }
    },
}
