const _ = require('lodash')
const utils = require('../utils/utils');
const DocumentTemplate = require('./DocumentTemplate').fields;
const DocumentTemplateMapping = require('./DocumentTemplate').mapping;
const PaymentMethod = require('./PaymentMethod').fields;
const PaymentMethodMapping = require('./PaymentMethod').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...DocumentTemplate(keyPrefix + 'default_template'),
            ...DocumentTemplate(keyPrefix + 'dn_template'),
            ...DocumentTemplate(keyPrefix + 'ai_template'),
            {
                key: keyPrefix + 'notes',
                label: labelPrefix + 'Default notes.',
                type: 'string',
            },
            {
                key: keyPrefix + 'rivalsa',
                label: labelPrefix + 'Default rivalsa percentage.',
                type: 'number',
            },
            {
                key: keyPrefix + 'cassa',
                label: labelPrefix + 'Default cassa percentage.',
                type: 'number',
            },
            {
                key: keyPrefix + 'withholding_tax',
                label: labelPrefix + 'Default withholding tax percentage.',
                type: 'number',
            },
            {
                key: keyPrefix + 'withholding_tax_taxable',
                label: labelPrefix + 'Default withholding tax taxable percentage.',
                type: 'number',
            },
            {
                key: keyPrefix + 'other_withholding_tax',
                label: labelPrefix + 'Default other withholding tax percentage.',
                type: 'number',
            },
            {
                key: keyPrefix + 'use_gross_prices',
                label: labelPrefix + 'Use gross price by default.',
                type: 'boolean',
            },
            ...PaymentMethod(keyPrefix + 'payment_method'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'default_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, keyPrefix + 'default_template')),
            'dn_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, keyPrefix + 'dn_template')),
            'ai_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, keyPrefix + 'ai_template')),
            'notes': bundle.inputData?.[keyPrefix + 'notes'],
            'rivalsa': bundle.inputData?.[keyPrefix + 'rivalsa'],
            'cassa': bundle.inputData?.[keyPrefix + 'cassa'],
            'withholding_tax': bundle.inputData?.[keyPrefix + 'withholding_tax'],
            'withholding_tax_taxable': bundle.inputData?.[keyPrefix + 'withholding_tax_taxable'],
            'other_withholding_tax': bundle.inputData?.[keyPrefix + 'other_withholding_tax'],
            'use_gross_prices': bundle.inputData?.[keyPrefix + 'use_gross_prices'],
            'payment_method': utils.removeIfEmpty(PaymentMethodMapping(bundle, keyPrefix + 'payment_method')),
        }
    },
}
