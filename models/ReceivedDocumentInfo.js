const utils = require('../utils/utils');
const Currency = require('../models/Currency');
const PaymentAccount = require('../models/PaymentAccount');
const ReceivedDocumentInfo_default_values = require('../models/ReceivedDocumentInfo_default_values');
const ReceivedDocumentInfo_items_default_values = require('../models/ReceivedDocumentInfo_items_default_values');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ReceivedDocumentInfo_default_values.fields(`${keyPrefix}default_values`, isInput),
            ...ReceivedDocumentInfo_items_default_values.fields(`${keyPrefix}items_default_values`, isInput),
            {
                key: `${keyPrefix}countries_list`,
                label: `Countries list - [${labelPrefix}countries_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencies_list`,
                label: `[${labelPrefix}currencies_list]`,
                children: Currency.fields(`${keyPrefix}currencies_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}categories_list`,
                label: `Categories list - [${labelPrefix}categories_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_accounts_list`,
                label: `[${labelPrefix}payment_accounts_list]`,
                children: PaymentAccount.fields(`${keyPrefix}payment_accounts_list${!isInput ? '[]' : ''}`, isInput, true), 
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
            'default_values': utils.removeIfEmpty(ReceivedDocumentInfo_default_values.mapping(bundle, `${keyPrefix}default_values`)),
            'items_default_values': utils.removeIfEmpty(ReceivedDocumentInfo_items_default_values.mapping(bundle, `${keyPrefix}items_default_values`)),
            'countries_list': bundle.inputData?.[`${keyPrefix}countries_list`],
            'currencies_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}currencies_list`], `${keyPrefix}currencies_list`),
            'categories_list': bundle.inputData?.[`${keyPrefix}categories_list`],
            'payment_accounts_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payment_accounts_list`], `${keyPrefix}payment_accounts_list`),
            'vat_types_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}vat_types_list`], `${keyPrefix}vat_types_list`),
        }
    },
}
