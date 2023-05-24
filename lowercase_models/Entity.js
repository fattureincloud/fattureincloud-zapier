const _ = require('lodash')
const utils = require('../utils/utils');
const EntityType = require('./EntityType').fields;
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
                label: labelPrefix + 'Code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Name',
                type: 'string',
            },
            {
                key: keyPrefix + 'type',
                ...EntityType,
            },
            {
                key: keyPrefix + 'first_name',
                label: labelPrefix + 'First name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'last_name',
                label: labelPrefix + 'Last name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'contact_person',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'vat_number',
                label: labelPrefix + 'Vat number',
                type: 'string',
            },
            {
                key: keyPrefix + 'tax_code',
                label: labelPrefix + 'Tax code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_street',
                label: labelPrefix + 'Street address.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_postal_code',
                label: labelPrefix + 'Postal code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_city',
                label: labelPrefix + 'City.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_province',
                label: labelPrefix + 'Province.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_extra',
                label: labelPrefix + 'Address extra info.',
                type: 'string',
            },
            {
                key: keyPrefix + 'country',
                label: labelPrefix + 'Country',
                type: 'string',
            },
            {
                key: keyPrefix + 'country_iso',
                label: labelPrefix + 'Country Iso',
                type: 'string',
            },
            {
                key: keyPrefix + 'email',
                label: labelPrefix + 'Email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'certified_email',
                label: labelPrefix + 'Certified email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'phone',
                label: labelPrefix + 'Phone.',
                type: 'string',
            },
            {
                key: keyPrefix + 'fax',
                label: labelPrefix + 'Fax.',
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
                label: labelPrefix + '[Only for client] Default payment terms.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'default_payment_terms_type',
                ...PaymentTermsType,
            },
            ...PaymentMethod(keyPrefix + 'default_payment_method'),
            {
                key: keyPrefix + 'bank_name',
                label: labelPrefix + '[Only for client] Bank name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_iban',
                label: labelPrefix + '[Only for client] Iban.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_swift_code',
                label: labelPrefix + '[Only for client] Bank swift code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'shipping_address',
                label: labelPrefix + '[Only for client] Shipping address.',
                type: 'string',
            },
            {
                key: keyPrefix + 'e_invoice',
                label: labelPrefix + '[Only for client] Use e-invoices.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ei_code',
                label: labelPrefix + '[Only for client] E-invoices code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'has_intent_declaration',
                label: labelPrefix + '[Only for client] Has intent declaration.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'intent_declaration_protocol_number',
                label: labelPrefix + '[Only for client] Intent declaration protocol number.',
                type: 'string',
            },
            {
                key: keyPrefix + 'intent_declaration_protocol_date',
                label: labelPrefix + '[Only for client] Intent declaration protocol date.',
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
            'country_iso': bundle.inputData?.[keyPrefix + 'country_iso'],
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
            'has_intent_declaration': bundle.inputData?.[keyPrefix + 'has_intent_declaration'],
            'intent_declaration_protocol_number': bundle.inputData?.[keyPrefix + 'intent_declaration_protocol_number'],
            'intent_declaration_protocol_date': bundle.inputData?.[keyPrefix + 'intent_declaration_protocol_date'],
            'created_at': bundle.inputData?.[keyPrefix + 'created_at'],
            'updated_at': bundle.inputData?.[keyPrefix + 'updated_at'],
        }
    },
}
