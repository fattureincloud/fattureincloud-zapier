const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentPreCreateInfo_default_values = require('./IssuedDocumentPreCreateInfo_default_values').fields;
const IssuedDocumentPreCreateInfo_default_valuesMapping = require('./IssuedDocumentPreCreateInfo_default_values').mapping;
const IssuedDocumentPreCreateInfo_extra_data_default_values = require('./IssuedDocumentPreCreateInfo_extra_data_default_values').fields;
const IssuedDocumentPreCreateInfo_extra_data_default_valuesMapping = require('./IssuedDocumentPreCreateInfo_extra_data_default_values').mapping;
const IssuedDocumentPreCreateInfo_items_default_values = require('./IssuedDocumentPreCreateInfo_items_default_values').fields;
const IssuedDocumentPreCreateInfo_items_default_valuesMapping = require('./IssuedDocumentPreCreateInfo_items_default_values').mapping;
const Currency = require('./Currency').fields;
const CurrencyMapping = require('./Currency').mapping;
const DocumentTemplate = require('./DocumentTemplate').fields;
const DocumentTemplateMapping = require('./DocumentTemplate').mapping;
const PaymentMethod = require('./PaymentMethod').fields;
const PaymentMethodMapping = require('./PaymentMethod').mapping;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;
const Language = require('./Language').fields;
const LanguageMapping = require('./Language').mapping;

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
                key: `${keyPrefix}dn_numerations`,
                label: `[${keyPrefix}dn_numerations]`,
                dict: true,
            },
            ...IssuedDocumentPreCreateInfo_default_values(`${keyPrefix}default_values`),
            ...IssuedDocumentPreCreateInfo_extra_data_default_values(`${keyPrefix}extra_data_default_values`),
            ...IssuedDocumentPreCreateInfo_items_default_values(`${keyPrefix}items_default_values`),
            {
                key: `${keyPrefix}countries_list`,
                label: `Countries list. - [${keyPrefix}countries_list]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencies_list`,
                label: `${keyPrefix}currencies_list]`,
                children: Currency(`${keyPrefix}currencies_list`), 
            },
            {
                key: `${keyPrefix}templates_list`,
                label: `${keyPrefix}templates_list]`,
                children: DocumentTemplate(`${keyPrefix}templates_list`), 
            },
            {
                key: `${keyPrefix}dn_templates_list`,
                label: `${keyPrefix}dn_templates_list]`,
                children: DocumentTemplate(`${keyPrefix}dn_templates_list`), 
            },
            {
                key: `${keyPrefix}ai_templates_list`,
                label: `${keyPrefix}ai_templates_list]`,
                children: DocumentTemplate(`${keyPrefix}ai_templates_list`), 
            },
            {
                key: `${keyPrefix}payment_methods_list`,
                label: `${keyPrefix}payment_methods_list]`,
                children: PaymentMethod(`${keyPrefix}payment_methods_list`), 
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
            {
                key: `${keyPrefix}languages_list`,
                label: `${keyPrefix}languages_list]`,
                children: Language(`${keyPrefix}languages_list`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'numerations': bundle.inputData?.[`${keyPrefix}numerations`],
            'dn_numerations': bundle.inputData?.[`${keyPrefix}dn_numerations`],
            'default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_default_valuesMapping(bundle, `${keyPrefix}default_values`)),
            'extra_data_default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_extra_data_default_valuesMapping(bundle, `${keyPrefix}extra_data_default_values`)),
            'items_default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_items_default_valuesMapping(bundle, `${keyPrefix}items_default_values`)),
            'countries_list': bundle.inputData?.[`${keyPrefix}countries_list`],
            'currencies_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}currencies_list`]),
            'templates_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}templates_list`]),
            'dn_templates_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}dn_templates_list`]),
            'ai_templates_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}ai_templates_list`]),
            'payment_methods_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payment_methods_list`]),
            'payment_accounts_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payment_accounts_list`]),
            'vat_types_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}vat_types_list`]),
            'languages_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}languages_list`]),
        }
    },
}
