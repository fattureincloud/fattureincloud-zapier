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
                key: keyPrefix + 'amount_rivalsa',
                label: labelPrefix + 'Rivalsa amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_net_with_rivalsa',
                label: labelPrefix + 'Net amount with rivalsa.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_cassa',
                label: labelPrefix + 'Cassa amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'taxable_amount',
                label: labelPrefix + 'Taxable amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'not_taxable_amount',
                label: labelPrefix + 'Not taxable amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_vat',
                label: labelPrefix + 'Total vat amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_gross',
                label: labelPrefix + 'Total grosas amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'taxable_amount_withholding_tax',
                label: labelPrefix + 'Taxable withholding tax amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_withholding_tax',
                label: labelPrefix + 'Withholding tax amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'taxable_amount_other_withholding_tax',
                label: labelPrefix + 'Other withholding tax taxable amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_other_withholding_tax',
                label: labelPrefix + 'Other withholding tax amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'stamp_duty',
                label: labelPrefix + 'Stamp duty value [0 if not present].',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_due',
                label: labelPrefix + 'Total amount due.',
                type: 'number',
            },
            {
                key: keyPrefix + 'is_enasarco_maximal_exceeded',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'payments_sum',
                label: labelPrefix + 'Payments sum.',
                type: 'number',
            },
            {
                key: keyPrefix + 'vat_list',
                
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'amount_net': bundle.inputData?.[keyPrefix + 'amount_net'],
            'amount_rivalsa': bundle.inputData?.[keyPrefix + 'amount_rivalsa'],
            'amount_net_with_rivalsa': bundle.inputData?.[keyPrefix + 'amount_net_with_rivalsa'],
            'amount_cassa': bundle.inputData?.[keyPrefix + 'amount_cassa'],
            'taxable_amount': bundle.inputData?.[keyPrefix + 'taxable_amount'],
            'not_taxable_amount': bundle.inputData?.[keyPrefix + 'not_taxable_amount'],
            'amount_vat': bundle.inputData?.[keyPrefix + 'amount_vat'],
            'amount_gross': bundle.inputData?.[keyPrefix + 'amount_gross'],
            'taxable_amount_withholding_tax': bundle.inputData?.[keyPrefix + 'taxable_amount_withholding_tax'],
            'amount_withholding_tax': bundle.inputData?.[keyPrefix + 'amount_withholding_tax'],
            'taxable_amount_other_withholding_tax': bundle.inputData?.[keyPrefix + 'taxable_amount_other_withholding_tax'],
            'amount_other_withholding_tax': bundle.inputData?.[keyPrefix + 'amount_other_withholding_tax'],
            'stamp_duty': bundle.inputData?.[keyPrefix + 'stamp_duty'],
            'amount_due': bundle.inputData?.[keyPrefix + 'amount_due'],
            'is_enasarco_maximal_exceeded': bundle.inputData?.[keyPrefix + 'is_enasarco_maximal_exceeded'],
            'payments_sum': bundle.inputData?.[keyPrefix + 'payments_sum'],
            'vat_list': bundle.inputData?.[keyPrefix + 'vat_list'],
        }
    },
}
