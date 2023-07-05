const utils = require('../utils/utils');
const Currency = require('../models/Currency');
const DocumentTemplate = require('../models/DocumentTemplate');
const IssuedDocumentPreCreateInfo_default_values = require('../models/IssuedDocumentPreCreateInfo_default_values');
const IssuedDocumentPreCreateInfo_extra_data_default_values = require('../models/IssuedDocumentPreCreateInfo_extra_data_default_values');
const IssuedDocumentPreCreateInfo_items_default_values = require('../models/IssuedDocumentPreCreateInfo_items_default_values');
const Language = require('../models/Language');
const PaymentAccount = require('../models/PaymentAccount');
const PaymentMethod = require('../models/PaymentMethod');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}numerations`,
                label: `[${labelPrefix}numerations]`,
                dict: true,
            },
            {
                key: `${keyPrefix}dn_numerations`,
                label: `[${labelPrefix}dn_numerations]`,
                dict: true,
            },
            ...IssuedDocumentPreCreateInfo_default_values.fields(`${keyPrefix}default_values`, isInput),
            ...IssuedDocumentPreCreateInfo_extra_data_default_values.fields(`${keyPrefix}extra_data_default_values`, isInput),
            ...IssuedDocumentPreCreateInfo_items_default_values.fields(`${keyPrefix}items_default_values`, isInput),
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
                key: `${keyPrefix}templates_list`,
                label: `[${labelPrefix}templates_list]`,
                children: DocumentTemplate.fields(`${keyPrefix}templates_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}dn_templates_list`,
                label: `[${labelPrefix}dn_templates_list]`,
                children: DocumentTemplate.fields(`${keyPrefix}dn_templates_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}ai_templates_list`,
                label: `[${labelPrefix}ai_templates_list]`,
                children: DocumentTemplate.fields(`${keyPrefix}ai_templates_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}payment_methods_list`,
                label: `[${labelPrefix}payment_methods_list]`,
                children: PaymentMethod.fields(`${keyPrefix}payment_methods_list${!isInput ? '[]' : ''}`, isInput, true), 
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
            {
                key: `${keyPrefix}languages_list`,
                label: `[${labelPrefix}languages_list]`,
                children: Language.fields(`${keyPrefix}languages_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'numerations': bundle.inputData?.[`${keyPrefix}numerations`],
            'dn_numerations': bundle.inputData?.[`${keyPrefix}dn_numerations`],
            'default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_default_values.mapping(bundle, `${keyPrefix}default_values`)),
            'extra_data_default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_extra_data_default_values.mapping(bundle, `${keyPrefix}extra_data_default_values`)),
            'items_default_values': utils.removeIfEmpty(IssuedDocumentPreCreateInfo_items_default_values.mapping(bundle, `${keyPrefix}items_default_values`)),
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
