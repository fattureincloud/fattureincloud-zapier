const utils = require('../utils/utils');
const EntityType = require('../models/EntityType');
const PaymentMethod = require('../models/PaymentMethod');
const PaymentTermsType = require('../models/PaymentTermsType');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Entity id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Entity code - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Entity name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...EntityType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}first_name`,
                label: `Entity first name - [${labelPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `Entity last name - [${labelPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contact_person`,
                label: `Entity contact person - [${labelPrefix}contact_person]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_number`,
                label: `Entity vat number - [${labelPrefix}vat_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Entity tax code - [${labelPrefix}tax_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_street`,
                label: `Entitity address street - [${labelPrefix}address_street]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_postal_code`,
                label: `Entity address postal code - [${labelPrefix}address_postal_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_city`,
                label: `Entity address city - [${labelPrefix}address_city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_province`,
                label: `Entity address province - [${labelPrefix}address_province]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_extra`,
                label: `Entity address extra info - [${labelPrefix}address_extra]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                label: `Entity country - [${labelPrefix}country]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country_iso`,
                label: `Entity country iso code - [${labelPrefix}country_iso]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Entity email - [${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}certified_email`,
                label: `Entity certified email - [${labelPrefix}certified_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `Entity phone - [${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fax`,
                label: `Entity fax - [${labelPrefix}fax]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Entity extra - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}default_payment_terms`,
                label: `[Only for client] Client default payment terms - [${labelPrefix}default_payment_terms]`,
                type: 'integer',
            },
            ...VatType.fields(`${keyPrefix}default_vat`, isInput),
            {
                key: `${keyPrefix}default_payment_terms_type`,
                ...PaymentTermsType.fields(`${keyPrefix}default_payment_terms_type`, isInput),
            },
            ...PaymentMethod.fields(`${keyPrefix}default_payment_method`, isInput),
            {
                key: `${keyPrefix}bank_name`,
                label: `[Only for client] Client bank name - [${labelPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `[Only for client] Client bank iban - [${labelPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_swift_code`,
                label: `[Only for client] Client bank swift code - [${labelPrefix}bank_swift_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipping_address`,
                label: `[Only for client] Client Shipping address - [${labelPrefix}shipping_address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `[Only for client] Use e-invoices. - [${labelPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_code`,
                label: `[Only for client] E-invoices code. - [${labelPrefix}ei_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}has_intent_declaration`,
                label: `[Only for client] Has intent declaration. - [${labelPrefix}has_intent_declaration]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}intent_declaration_protocol_number`,
                label: `[Only for client] Client intent declaration protocol number - [${labelPrefix}intent_declaration_protocol_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}intent_declaration_protocol_date`,
                label: `[Only for client] Client intent declaration protocol date - [${labelPrefix}intent_declaration_protocol_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `Entity creation date - [${labelPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Entity last update date - [${labelPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'contact_person': bundle.inputData?.[`${keyPrefix}contact_person`],
            'vat_number': bundle.inputData?.[`${keyPrefix}vat_number`],
            'tax_code': bundle.inputData?.[`${keyPrefix}tax_code`],
            'address_street': bundle.inputData?.[`${keyPrefix}address_street`],
            'address_postal_code': bundle.inputData?.[`${keyPrefix}address_postal_code`],
            'address_city': bundle.inputData?.[`${keyPrefix}address_city`],
            'address_province': bundle.inputData?.[`${keyPrefix}address_province`],
            'address_extra': bundle.inputData?.[`${keyPrefix}address_extra`],
            'country': bundle.inputData?.[`${keyPrefix}country`],
            'country_iso': bundle.inputData?.[`${keyPrefix}country_iso`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'certified_email': bundle.inputData?.[`${keyPrefix}certified_email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'fax': bundle.inputData?.[`${keyPrefix}fax`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'default_payment_terms': bundle.inputData?.[`${keyPrefix}default_payment_terms`],
            'default_vat': utils.removeIfEmpty(VatType.mapping(bundle, `${keyPrefix}default_vat`)),
            'default_payment_terms_type': bundle.inputData?.[`${keyPrefix}default_payment_terms_type`],
            'default_payment_method': utils.removeIfEmpty(PaymentMethod.mapping(bundle, `${keyPrefix}default_payment_method`)),
            'bank_name': bundle.inputData?.[`${keyPrefix}bank_name`],
            'bank_iban': bundle.inputData?.[`${keyPrefix}bank_iban`],
            'bank_swift_code': bundle.inputData?.[`${keyPrefix}bank_swift_code`],
            'shipping_address': bundle.inputData?.[`${keyPrefix}shipping_address`],
            'e_invoice': bundle.inputData?.[`${keyPrefix}e_invoice`],
            'ei_code': bundle.inputData?.[`${keyPrefix}ei_code`],
            'has_intent_declaration': bundle.inputData?.[`${keyPrefix}has_intent_declaration`],
            'intent_declaration_protocol_number': bundle.inputData?.[`${keyPrefix}intent_declaration_protocol_number`],
            'intent_declaration_protocol_date': bundle.inputData?.[`${keyPrefix}intent_declaration_protocol_date`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
