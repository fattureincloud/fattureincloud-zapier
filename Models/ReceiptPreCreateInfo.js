const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            // ...map(keyPrefix + 'numerations'),
            {
                key: keyPrefix + 'numerations_list',
                label: labelPrefix + 'List of series used in the past.',
                list: true,
                type: 'string',
            },
            {
                key: keyPrefix + 'rc_centers_list',
                label: labelPrefix + 'List of revenue centers used in the past.',
                list: true,
                type: 'string',
            },
            {
                key: keyPrefix + 'payment_accounts_list',
                
                children: PaymentAccount(keyPrefix + 'payment_accounts_list'), 
            },
            {
                key: keyPrefix + 'categories_list',
                label: labelPrefix + 'List of categories used in the past.',
                list: true,
                type: 'string',
            },
            {
                key: keyPrefix + 'vat_types_list',
                
                children: VatType(keyPrefix + 'vat_types_list'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            // 'numerations': utils.removeIfEmpty(mapMapping(bundle, keyPrefix + 'numerations')),
            'numerations_list': bundle.inputData?.[keyPrefix + 'numerations_list'],
            'rc_centers_list': bundle.inputData?.[keyPrefix + 'rc_centers_list'],
            'payment_accounts_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'payment_accounts_list']),
            'categories_list': bundle.inputData?.[keyPrefix + 'categories_list'],
            'vat_types_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'vat_types_list']),
        }
    },
}
