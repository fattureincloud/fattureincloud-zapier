const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}amount_net`,
                label: `Total net amount. - [${keyPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_rivalsa`,
                label: `Rivalsa amount. - [${keyPrefix}amount_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_net_with_rivalsa`,
                label: `Net amount with rivalsa. - [${keyPrefix}amount_net_with_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa`,
                label: `Cassa amount. - [${keyPrefix}amount_cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable_amount`,
                label: `Taxable amount. - [${keyPrefix}taxable_amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}not_taxable_amount`,
                label: `Not taxable amount. - [${keyPrefix}not_taxable_amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Total vat amount. - [${keyPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Total grosas amount. - [${keyPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable_amount_withholding_tax`,
                label: `Taxable withholding tax amount. - [${keyPrefix}taxable_amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax`,
                label: `Withholding tax amount. - [${keyPrefix}amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable_amount_other_withholding_tax`,
                label: `Other withholding tax taxable amount. - [${keyPrefix}taxable_amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax`,
                label: `Other withholding tax amount. - [${keyPrefix}amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}stamp_duty`,
                label: `Stamp duty value [0 if not present]. - [${keyPrefix}stamp_duty]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_due`,
                label: `Total amount due. - [${keyPrefix}amount_due]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}is_enasarco_maximal_exceeded`,
                label: `[${keyPrefix}is_enasarco_maximal_exceeded]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}payments_sum`,
                label: `Payments sum. - [${keyPrefix}payments_sum]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}vat_list`,
                label: `[${keyPrefix}vat_list]`,
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
