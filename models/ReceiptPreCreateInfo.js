const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}numerations`,
                label: `[${keyPrefix}numerations]`,
                dict: true,
            },
            {
                key: `${keyPrefix}numerations_list`,
                label: `List of series used in the past. - [${keyPrefix}numerations_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}rc_centers_list`,
                label: `List of revenue centers used in the past. - [${keyPrefix}rc_centers_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_accounts_list`,
                label: `${keyPrefix}payment_accounts_list]`,
                children: PaymentAccount(`${keyPrefix}payment_accounts_list`), 
            },
            {
                key: `${keyPrefix}categories_list`,
                label: `List of categories used in the past. - [${keyPrefix}categories_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_types_list`,
                label: `${keyPrefix}vat_types_list]`,
                children: VatType(`${keyPrefix}vat_types_list`), 
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