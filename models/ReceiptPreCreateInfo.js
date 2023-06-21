const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}numerations`,
                label: `[${labelPrefix}numerations]`,
                dict: true,
            },
            {
                key: `${keyPrefix}numerations_list`,
                label: `Receipt used numerations list - [${labelPrefix}numerations_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}rc_centers_list`,
                label: `Receipt used revenue centers list - [${labelPrefix}rc_centers_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_accounts_list`,
                label: `${labelPrefix}payment_accounts_list]`,
                children: PaymentAccount(`${keyPrefix}payment_accounts_list${!isInput && '[]'}`), 
            },
            {
                key: `${keyPrefix}categories_list`,
                label: `Receipt categories list - [${labelPrefix}categories_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_types_list`,
                label: `${labelPrefix}vat_types_list]`,
                children: VatType(`${keyPrefix}vat_types_list${!isInput && '[]'}`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'numerations': bundle.inputData?.[`${keyPrefix}numerations`],
            'numerations_list': bundle.inputData?.[`${keyPrefix}numerations_list`],
            'rc_centers_list': bundle.inputData?.[`${keyPrefix}rc_centers_list`],
            'payment_accounts_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payment_accounts_list`]),
            'categories_list': bundle.inputData?.[`${keyPrefix}categories_list`],
            'vat_types_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}vat_types_list`]),
        }
    },
}
