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
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'id',
                label: labelPrefix + 'Unique identifier',
                type: 'integer',
            },
            {
                key: keyPrefix + 'code',
                label: labelPrefix + 'Client code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Client name',
                type: 'string',
            },
            {
                key: keyPrefix + 'type',
                ...ClientType,
            },
            {
                key: keyPrefix + 'first_name',
                label: labelPrefix + 'Client first name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'last_name',
                label: labelPrefix + 'Client last name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'contact_person',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'vat_number',
                label: labelPrefix + 'Client vat number',
                type: 'string',
            },
            {
                key: keyPrefix + 'tax_code',
                label: labelPrefix + 'Client tax code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_street',
                label: labelPrefix + 'Client street address.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_postal_code',
                label: labelPrefix + 'Client postal code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_city',
                label: labelPrefix + 'Client city.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_province',
                label: labelPrefix + 'Client province.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_extra',
                label: labelPrefix + 'Client address extra info.',
                type: 'string',
            },
            {
                key: keyPrefix + 'country',
                label: labelPrefix + 'Client country',
                type: 'string',
            },
            {
                key: keyPrefix + 'email',
                label: labelPrefix + 'Client email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'certified_email',
                label: labelPrefix + 'Client certified email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'phone',
                label: labelPrefix + 'Client phone.',
                type: 'string',
            },
            {
                key: keyPrefix + 'fax',
                label: labelPrefix + 'Client fax.',
                type: 'string',
            },
            {
                key: keyPrefix + 'notes',
                label: labelPrefix + 'Extra notes.',
                type: 'string',
            },
            ...VatType(keyPrefix + 'default_vat'),
            {
                key: keyPrefix + 'default_payment_terms',
                
                type: 'integer',
            },
            {
                key: keyPrefix + 'default_payment_terms_type',
                ...PaymentTermsType,
            },
            ...PaymentMethod(keyPrefix + 'default_payment_method'),
            {
                key: keyPrefix + 'bank_name',
                label: labelPrefix + 'Client bank name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_iban',
                label: labelPrefix + 'Client iban.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_swift_code',
                label: labelPrefix + 'Client bank swift code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'shipping_address',
                label: labelPrefix + 'Client shipping address.',
                type: 'string',
            },
            {
                key: keyPrefix + 'e_invoice',
                label: labelPrefix + 'Use e-invoices for this entity',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ei_code',
                label: labelPrefix + 'E-invoice code',
                type: 'string',
            },
            {
                key: keyPrefix + 'discount_highlight',
                label: labelPrefix + 'Discount Highlight.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'default_discount',
                label: labelPrefix + 'Default discount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'has_intent_declaration',
                label: labelPrefix + 'Has intent declaration.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'intent_declaration_protocol_number',
                label: labelPrefix + 'Intent declaration protocol number.',
                type: 'string',
            },
            {
                key: keyPrefix + 'intent_declaration_protocol_date',
                label: labelPrefix + 'Intent declaration protocol date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'created_at',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'updated_at',
                
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'code': bundle.inputData?.[keyPrefix + 'code'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'first_name': bundle.inputData?.[keyPrefix + 'first_name'],
            'last_name': bundle.inputData?.[keyPrefix + 'last_name'],
            'contact_person': bundle.inputData?.[keyPrefix + 'contact_person'],
            'vat_number': bundle.inputData?.[keyPrefix + 'vat_number'],
            'tax_code': bundle.inputData?.[keyPrefix + 'tax_code'],
            'address_street': bundle.inputData?.[keyPrefix + 'address_street'],
            'address_postal_code': bundle.inputData?.[keyPrefix + 'address_postal_code'],
            'address_city': bundle.inputData?.[keyPrefix + 'address_city'],
            'address_province': bundle.inputData?.[keyPrefix + 'address_province'],
            'address_extra': bundle.inputData?.[keyPrefix + 'address_extra'],
            'country': bundle.inputData?.[keyPrefix + 'country'],
            'email': bundle.inputData?.[keyPrefix + 'email'],
            'certified_email': bundle.inputData?.[keyPrefix + 'certified_email'],
            'phone': bundle.inputData?.[keyPrefix + 'phone'],
            'fax': bundle.inputData?.[keyPrefix + 'fax'],
            'notes': bundle.inputData?.[keyPrefix + 'notes'],
            'default_vat': utils.removeIfEmpty(VatTypeMapping(bundle, keyPrefix + 'default_vat')),
            'default_payment_terms': bundle.inputData?.[keyPrefix + 'default_payment_terms'],
            'default_payment_terms_type': bundle.inputData?.[keyPrefix + 'default_payment_terms_type'],
            'default_payment_method': utils.removeIfEmpty(PaymentMethodMapping(bundle, keyPrefix + 'default_payment_method')),
            'bank_name': bundle.inputData?.[keyPrefix + 'bank_name'],
            'bank_iban': bundle.inputData?.[keyPrefix + 'bank_iban'],
            'bank_swift_code': bundle.inputData?.[keyPrefix + 'bank_swift_code'],
            'shipping_address': bundle.inputData?.[keyPrefix + 'shipping_address'],
            'e_invoice': bundle.inputData?.[keyPrefix + 'e_invoice'],
            'ei_code': bundle.inputData?.[keyPrefix + 'ei_code'],
            'discount_highlight': bundle.inputData?.[keyPrefix + 'discount_highlight'],
            'default_discount': bundle.inputData?.[keyPrefix + 'default_discount'],
            'has_intent_declaration': bundle.inputData?.[keyPrefix + 'has_intent_declaration'],
            'intent_declaration_protocol_number': bundle.inputData?.[keyPrefix + 'intent_declaration_protocol_number'],
            'intent_declaration_protocol_date': bundle.inputData?.[keyPrefix + 'intent_declaration_protocol_date'],
            'created_at': bundle.inputData?.[keyPrefix + 'created_at'],
            'updated_at': bundle.inputData?.[keyPrefix + 'updated_at'],
        }
    },
}
