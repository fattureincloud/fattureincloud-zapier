const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}amount_net`,
                label: `Issued document total net amount - [${labelPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_rivalsa`,
                label: `Issued document rivalsa amount - [${labelPrefix}amount_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_net_with_rivalsa`,
                label: `Issued document net amount with rivalsa - [${labelPrefix}amount_net_with_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa`,
                label: `Issued document cassa amount - [${labelPrefix}amount_cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable_amount`,
                label: `Issued document taxable amount - [${labelPrefix}taxable_amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}not_taxable_amount`,
                label: `Issued document not taxable amount - [${labelPrefix}not_taxable_amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Issued document total vat amount - [${labelPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Issued document total gross amount - [${labelPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable_amount_withholding_tax`,
                label: `Issued document Taxable withholding tax amount - [${labelPrefix}taxable_amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax`,
                label: `Issued document withholding tax amount - [${labelPrefix}amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable_amount_other_withholding_tax`,
                label: `Issued document other withholding tax taxable amount - [${labelPrefix}taxable_amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax`,
                label: `Issued document other withholding tax amount - [${labelPrefix}amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}stamp_duty`,
                label: `Issued document stamp duty value [0 if not present]. - [${labelPrefix}stamp_duty]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_due`,
                label: `Issued document total amount due - [${labelPrefix}amount_due]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}is_enasarco_maximal_exceeded`,
                label: `Is enasarco maximal excedeed - [${labelPrefix}is_enasarco_maximal_exceeded]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}payments_sum`,
                label: `Issued document payments sum - [${labelPrefix}payments_sum]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}vat_list`,
                label: `[${labelPrefix}vat_list]`,
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_rivalsa': bundle.inputData?.[`${keyPrefix}amount_rivalsa`],
            'amount_net_with_rivalsa': bundle.inputData?.[`${keyPrefix}amount_net_with_rivalsa`],
            'amount_cassa': bundle.inputData?.[`${keyPrefix}amount_cassa`],
            'taxable_amount': bundle.inputData?.[`${keyPrefix}taxable_amount`],
            'not_taxable_amount': bundle.inputData?.[`${keyPrefix}not_taxable_amount`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'taxable_amount_withholding_tax': bundle.inputData?.[`${keyPrefix}taxable_amount_withholding_tax`],
            'amount_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_withholding_tax`],
            'taxable_amount_other_withholding_tax': bundle.inputData?.[`${keyPrefix}taxable_amount_other_withholding_tax`],
            'amount_other_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_other_withholding_tax`],
            'stamp_duty': bundle.inputData?.[`${keyPrefix}stamp_duty`],
            'amount_due': bundle.inputData?.[`${keyPrefix}amount_due`],
            'is_enasarco_maximal_exceeded': bundle.inputData?.[`${keyPrefix}is_enasarco_maximal_exceeded`],
            'payments_sum': bundle.inputData?.[`${keyPrefix}payments_sum`],
            'vat_list': bundle.inputData?.[`${keyPrefix}vat_list`],
        }
    },
}
