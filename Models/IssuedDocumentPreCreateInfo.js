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
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            // ...map(keyPrefix + 'numerations'),
            // ...map(keyPrefix + 'dn_numerations'),
            ...IssuedDocumentPreCreateInfo_default_values(keyPrefix + 'default_values'),
            ...IssuedDocumentPreCreateInfo_extra_data_default_values(keyPrefix + 'extra_data_default_values'),
            ...IssuedDocumentPreCreateInfo_items_default_values(keyPrefix + 'items_default_values'),
            {
                key: keyPrefix + 'countries_list',
                label: labelPrefix + 'Countries list.',
                list: true,
                type: 'string',
            },
            {
                key: keyPrefix + 'currencies_list',
                
                children: Currency(keyPrefix + 'currencies_list'), 
            },
            {
                key: keyPrefix + 'templates_list',
                
                children: DocumentTemplate(keyPrefix + 'templates_list'), 
            },
            {
                key: keyPrefix + 'dn_templates_list',
                
                children: DocumentTemplate(keyPrefix + 'dn_templates_list'), 
            },
            {
                key: keyPrefix + 'ai_templates_list',
                
                children: DocumentTemplate(keyPrefix + 'ai_templates_list'), 
            },
            {
                key: keyPrefix + 'payment_methods_list',
                
                children: PaymentMethod(keyPrefix + 'payment_methods_list'), 
            },
            {
                key: keyPrefix + 'payment_accounts_list',
                
                children: PaymentAccount(keyPrefix + 'payment_accounts_list'), 
            },
            {
                key: keyPrefix + 'vat_types_list',
                
                children: VatType(keyPrefix + 'vat_types_list'), 
            },
            {
                key: keyPrefix + 'languages_list',
                
                children: Language(keyPrefix + 'languages_list'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            // 'numerations': utils.removeIfEmpty(mapMapping(bundle, keyPrefix + 'numerations')),
            // 'dn_numerations': utils.removeIfEmpty(mapMapping(bundle, keyPrefix + 'dn_numerations')),
            'default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_default_valuesMapping(bundle, keyPrefix + 'default_values')),
            'extra_data_default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_extra_data_default_valuesMapping(bundle, keyPrefix + 'extra_data_default_values')),
            'items_default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_items_default_valuesMapping(bundle, keyPrefix + 'items_default_values')),
            'countries_list': bundle.inputData?.[keyPrefix + 'countries_list'],
            'currencies_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'currencies_list']),
            'templates_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'templates_list']),
            'dn_templates_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'dn_templates_list']),
            'ai_templates_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'ai_templates_list']),
            'payment_methods_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'payment_methods_list']),
            'payment_accounts_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'payment_accounts_list']),
            'vat_types_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'vat_types_list']),
            'languages_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'languages_list']),
        }
    },
}
