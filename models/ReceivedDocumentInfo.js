const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentInfo_default_values = require('./ReceivedDocumentInfo_default_values').fields;
const ReceivedDocumentInfo_default_valuesMapping = require('./ReceivedDocumentInfo_default_values').mapping;
const ReceivedDocumentInfo_items_default_values = require('./ReceivedDocumentInfo_items_default_values').fields;
const ReceivedDocumentInfo_items_default_valuesMapping = require('./ReceivedDocumentInfo_items_default_values').mapping;
const Currency = require('./Currency').fields;
const CurrencyMapping = require('./Currency').mapping;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...ReceivedDocumentInfo_default_values(`${keyPrefix}default_values`),
            ...ReceivedDocumentInfo_items_default_values(`${keyPrefix}items_default_values`),
            {
                key: `${keyPrefix}countries_list`,
                label: `[${keyPrefix}countries_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencies_list`,
                label: `${keyPrefix}currencies_list]`,
                children: Currency(`${keyPrefix}currencies_list`), 
            },
            {
                key: `${keyPrefix}categories_list`,
                label: `[${keyPrefix}categories_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_accounts_list`,
                label: `${keyPrefix}payment_accounts_list]`,
                children: PaymentAccount(`${keyPrefix}payment_accounts_list`), 
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
            'default_values': utils.removeIfEmpty(ReceivedDocumentInfo_default_valuesMapping(bundle, `${keyPrefix}default_values`)),
            'items_default_values': utils.removeIfEmpty(ReceivedDocumentInfo_items_default_valuesMapping(bundle, `${keyPrefix}items_default_values`)),
            'countries_list': bundle.inputData?.[`${keyPrefix}countries_list`],
            'currencies_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}currencies_list`]),
            'categories_list': bundle.inputData?.[`${keyPrefix}categories_list`],
            'payment_accounts_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payment_accounts_list`]),
            'vat_types_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}vat_types_list`]),
        }
    },
}
