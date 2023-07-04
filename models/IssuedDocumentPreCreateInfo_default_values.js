const _ = require('lodash')
const utils = require('../utils/utils');
const DocumentTemplate = require('../models/DocumentTemplate');
const PaymentMethod = require('../models/PaymentMethod');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...DocumentTemplate.fields(`${keyPrefix}default_template`, isInput),
            ...DocumentTemplate.fields(`${keyPrefix}dn_template`, isInput),
            ...DocumentTemplate.fields(`${keyPrefix}ai_template`, isInput),
            {
                key: `${keyPrefix}notes`,
                label: `Default notes. - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rivalsa`,
                label: `Default rivalsa percentage. - [${labelPrefix}rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa`,
                label: `Default cassa percentage. - [${labelPrefix}cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withholding_tax`,
                label: `Default withholding tax percentage. - [${labelPrefix}withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withholding_tax_taxable`,
                label: `Default withholding tax taxable percentage. - [${labelPrefix}withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}other_withholding_tax`,
                label: `Default other withholding tax percentage. - [${labelPrefix}other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}use_gross_prices`,
                label: `Use gross price by default. - [${labelPrefix}use_gross_prices]`,
                type: 'boolean',
            },
            ...PaymentMethod.fields(`${keyPrefix}payment_method`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'default_template': utils.removeIfEmpty(DocumentTemplate.mapping(bundle, `${keyPrefix}default_template`)),
            'dn_template': utils.removeIfEmpty(DocumentTemplate.mapping(bundle, `${keyPrefix}dn_template`)),
            'ai_template': utils.removeIfEmpty(DocumentTemplate.mapping(bundle, `${keyPrefix}ai_template`)),
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'rivalsa': bundle.inputData?.[`${keyPrefix}rivalsa`],
            'cassa': bundle.inputData?.[`${keyPrefix}cassa`],
            'withholding_tax': bundle.inputData?.[`${keyPrefix}withholding_tax`],
            'withholding_tax_taxable': bundle.inputData?.[`${keyPrefix}withholding_tax_taxable`],
            'other_withholding_tax': bundle.inputData?.[`${keyPrefix}other_withholding_tax`],
            'use_gross_prices': bundle.inputData?.[`${keyPrefix}use_gross_prices`],
            'payment_method': utils.removeIfEmpty(PaymentMethod.mapping(bundle, `${keyPrefix}payment_method`)),
        }
    },
}
