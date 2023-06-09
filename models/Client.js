const _ = require('lodash')
const utils = require('../utils/utils');
const ClientType = require('./ClientType').fields;
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;
const PaymentTermsType = require('./PaymentTermsType').fields;
const PaymentMethod = require('./PaymentMethod').fields;
const PaymentMethodMapping = require('./PaymentMethod').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Client id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Client code - [${keyPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Client name - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...ClientType(`${keyPrefix}type`),
            },
            {
                key: `${keyPrefix}first_name`,
                label: `Client first name - [${keyPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `Client last name - [${keyPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contact_person`,
                label: `Client contact person - [${keyPrefix}contact_person]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_number`,
                label: `Client vat number - [${keyPrefix}vat_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Client tax code - [${keyPrefix}tax_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_street`,
                label: `Client address street - [${keyPrefix}address_street]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_postal_code`,
                label: `Client address postal code - [${keyPrefix}address_postal_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_city`,
                label: `Client address city - [${keyPrefix}address_city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_province`,
                label: `Client address province - [${keyPrefix}address_province]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_extra`,
                label: `Client address extra info - [${keyPrefix}address_extra]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                label: `Client country - [${keyPrefix}country]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Client email - [${keyPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}certified_email`,
                label: `Client certified email - [${keyPrefix}certified_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `Client phone - [${keyPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fax`,
                label: `Client fax - [${keyPrefix}fax]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Client extra - [${keyPrefix}notes]`,
                type: 'string',
            },
            ...VatType(`${keyPrefix}default_vat`),
            {
                key: `${keyPrefix}default_payment_terms`,
                label: `Client default payment terms - [${keyPrefix}default_payment_terms]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}default_payment_terms_type`,
                ...PaymentTermsType(`${keyPrefix}default_payment_terms_type`),
            },
            ...PaymentMethod(`${keyPrefix}default_payment_method`),
            {
                key: `${keyPrefix}bank_name`,
                label: `Client bank name - [${keyPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `Client bank iban - [${keyPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_swift_code`,
                label: `Client bank swift code - [${keyPrefix}bank_swift_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipping_address`,
                label: `Client shipping address - [${keyPrefix}shipping_address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Use e-invoices for this entity - [${keyPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_code`,
                label: `Client e-invoice code  - [${keyPrefix}ei_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount_highlight`,
                label: `Highlight Discount - [${keyPrefix}discount_highlight]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}default_discount`,
                label: `Client default discount - [${keyPrefix}default_discount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}has_intent_declaration`,
                label: `Client has intent declaration - [${keyPrefix}has_intent_declaration]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}intent_declaration_protocol_number`,
                label: `Client intent declaration protocol number - [${keyPrefix}intent_declaration_protocol_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}intent_declaration_protocol_date`,
                label: `Client intent declaration protocol date - [${keyPrefix}intent_declaration_protocol_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `Client creation date - [${keyPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Client last update date - [${keyPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
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
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'certified_email': bundle.inputData?.[`${keyPrefix}certified_email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'fax': bundle.inputData?.[`${keyPrefix}fax`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'default_vat': utils.removeIfEmpty(VatTypeMapping(bundle, `${keyPrefix}default_vat`)),
            'default_payment_terms': bundle.inputData?.[`${keyPrefix}default_payment_terms`],
            'default_payment_terms_type': bundle.inputData?.[`${keyPrefix}default_payment_terms_type`],
            'default_payment_method': utils.removeIfEmpty(PaymentMethodMapping(bundle, `${keyPrefix}default_payment_method`)),
            'bank_name': bundle.inputData?.[`${keyPrefix}bank_name`],
            'bank_iban': bundle.inputData?.[`${keyPrefix}bank_iban`],
            'bank_swift_code': bundle.inputData?.[`${keyPrefix}bank_swift_code`],
            'shipping_address': bundle.inputData?.[`${keyPrefix}shipping_address`],
            'e_invoice': bundle.inputData?.[`${keyPrefix}e_invoice`],
            'ei_code': bundle.inputData?.[`${keyPrefix}ei_code`],
            'discount_highlight': bundle.inputData?.[`${keyPrefix}discount_highlight`],
            'default_discount': bundle.inputData?.[`${keyPrefix}default_discount`],
            'has_intent_declaration': bundle.inputData?.[`${keyPrefix}has_intent_declaration`],
            'intent_declaration_protocol_number': bundle.inputData?.[`${keyPrefix}intent_declaration_protocol_number`],
            'intent_declaration_protocol_date': bundle.inputData?.[`${keyPrefix}intent_declaration_protocol_date`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
