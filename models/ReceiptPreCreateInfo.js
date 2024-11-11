const utils = require('../utils/utils');
const PaymentAccount = require('../models/PaymentAccount');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}numerations`,
                label: `[${labelPrefix}numerations]`,
                type: 'string',
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
                label: `[${labelPrefix}payment_accounts_list]`,
                children: PaymentAccount.fields(`${keyPrefix}payment_accounts_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}categories_list`,
                label: `Receipt categories list - [${labelPrefix}categories_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_types_list`,
                label: `[${labelPrefix}vat_types_list]`,
                children: VatType.fields(`${keyPrefix}vat_types_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'numerations': utils.jsonFieldToObject(bundle.inputData?.[`${keyPrefix}numerations`], `${keyPrefix}numerations`),
            'numerations_list': bundle.inputData?.[`${keyPrefix}numerations_list`],
            'rc_centers_list': bundle.inputData?.[`${keyPrefix}rc_centers_list`],
            'payment_accounts_list': utils.childMapping(bundle.inputData?.[`${keyPrefix}payment_accounts_list`], `${keyPrefix}payment_accounts_list`, PaymentAccount),
            'categories_list': bundle.inputData?.[`${keyPrefix}categories_list`],
            'vat_types_list': utils.childMapping(bundle.inputData?.[`${keyPrefix}vat_types_list`], `${keyPrefix}vat_types_list`, VatType),
        }
    },
}
