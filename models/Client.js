const utils = require('../utils/utils');
const ClientType = require('../models/ClientType');
const PaymentMethod = require('../models/PaymentMethod');
const PaymentTermsType = require('../models/PaymentTermsType');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Client id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Client code - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Client name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...ClientType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}first_name`,
                label: `Client first name - [${labelPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `Client last name - [${labelPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contact_person`,
                label: `Client contact person - [${labelPrefix}contact_person]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_number`,
                label: `Client vat number - [${labelPrefix}vat_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Client tax code - [${labelPrefix}tax_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_street`,
                label: `Client address street - [${labelPrefix}address_street]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_postal_code`,
                label: `Client address postal code - [${labelPrefix}address_postal_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_city`,
                label: `Client address city - [${labelPrefix}address_city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_province`,
                label: `Client address province - [${labelPrefix}address_province]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_extra`,
                label: `Client address extra info - [${labelPrefix}address_extra]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                label: `Client country - [${labelPrefix}country]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Client email - [${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}certified_email`,
                label: `Client certified email - [${labelPrefix}certified_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `Client phone - [${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fax`,
                label: `Client fax - [${labelPrefix}fax]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Client extra - [${labelPrefix}notes]`,
                type: 'string',
            },
            ...VatType.fields(`${keyPrefix}default_vat`, isInput),
            {
                key: `${keyPrefix}default_payment_terms`,
                label: `Client default payment terms - [${labelPrefix}default_payment_terms]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}default_payment_terms_type`,
                ...PaymentTermsType.fields(`${keyPrefix}default_payment_terms_type`, isInput),
            },
            ...PaymentMethod.fields(`${keyPrefix}default_payment_method`, isInput),
            {
                key: `${keyPrefix}bank_name`,
                label: `Client bank name - [${labelPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `Client bank iban - [${labelPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_swift_code`,
                label: `Client bank swift code - [${labelPrefix}bank_swift_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipping_address`,
                label: `Client shipping address - [${labelPrefix}shipping_address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Use e-invoices for this entity - [${labelPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_code`,
                label: `Client e-invoice code  - [${labelPrefix}ei_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discount_highlight`,
                label: `Highlight Discount - [${labelPrefix}discount_highlight]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}default_discount`,
                label: `Client default discount - [${labelPrefix}default_discount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}has_intent_declaration`,
                label: `Client has intent declaration - [${labelPrefix}has_intent_declaration]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}intent_declaration_protocol_number`,
                label: `Client intent declaration protocol number - [${labelPrefix}intent_declaration_protocol_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}intent_declaration_protocol_date`,
                label: `Client intent declaration protocol date - [${labelPrefix}intent_declaration_protocol_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `Client creation date - [${labelPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Client last update date - [${labelPrefix}updated_at]`,
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
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'certified_email': bundle.inputData?.[`${keyPrefix}certified_email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'fax': bundle.inputData?.[`${keyPrefix}fax`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'default_vat': utils.removeIfEmpty(VatType.mapping(bundle, `${keyPrefix}default_vat`)),
            'default_payment_terms': bundle.inputData?.[`${keyPrefix}default_payment_terms`],
            'default_payment_terms_type': bundle.inputData?.[`${keyPrefix}default_payment_terms_type`],
            'default_payment_method': utils.removeIfEmpty(PaymentMethod.mapping(bundle, `${keyPrefix}default_payment_method`)),
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
