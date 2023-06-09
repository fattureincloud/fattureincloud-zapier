const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}amount_net`,
                label: `Received document total net amount - [${keyPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Received document total vat amount - [${keyPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Received document total gross amount - [${keyPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax`,
                label: `Received document withholding tax amount - [${keyPrefix}amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax`,
                label: `Received document other withholding tax amount - [${keyPrefix}amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_due`,
                label: `Received document total amount due - [${keyPrefix}amount_due]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}payments_sum`,
                label: `Received document payments sum - [${keyPrefix}payments_sum]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'amount_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_withholding_tax`],
            'amount_other_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_other_withholding_tax`],
            'amount_due': bundle.inputData?.[`${keyPrefix}amount_due`],
            'payments_sum': bundle.inputData?.[`${keyPrefix}payments_sum`],
        }
    },
}
