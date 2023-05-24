const _ = require('lodash')
const utils = require('../utils/utils');
const SupplierType = require('./SupplierType').fields;

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
                label: labelPrefix + 'Supplier code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Supplier name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'type',
                ...SupplierType,
            },
            {
                key: keyPrefix + 'first_name',
                label: labelPrefix + 'Supplier first name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'last_name',
                label: labelPrefix + 'Supplier last name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'contact_person',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'vat_number',
                label: labelPrefix + 'Supplier vat number.',
                type: 'string',
            },
            {
                key: keyPrefix + 'tax_code',
                label: labelPrefix + 'Supplier tax code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_street',
                label: labelPrefix + 'Supplier street address.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_postal_code',
                label: labelPrefix + 'Supplier postal code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_city',
                label: labelPrefix + 'Supplier city.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_province',
                label: labelPrefix + 'Supplier province.',
                type: 'string',
            },
            {
                key: keyPrefix + 'address_extra',
                label: labelPrefix + 'Supplier address extra info.',
                type: 'string',
            },
            {
                key: keyPrefix + 'country',
                label: labelPrefix + 'Supplier country.',
                type: 'string',
            },
            {
                key: keyPrefix + 'email',
                label: labelPrefix + 'Supplier email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'certified_email',
                label: labelPrefix + 'Supplier certified email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'phone',
                label: labelPrefix + 'Supplier phone.',
                type: 'string',
            },
            {
                key: keyPrefix + 'fax',
                label: labelPrefix + 'Supplier fax.',
                type: 'string',
            },
            {
                key: keyPrefix + 'notes',
                label: labelPrefix + 'Supplier extra notes.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_iban',
                label: labelPrefix + 'Supplier bank IBAN.',
                type: 'string',
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
            'bank_iban': bundle.inputData?.[keyPrefix + 'bank_iban'],
            'created_at': bundle.inputData?.[keyPrefix + 'created_at'],
            'updated_at': bundle.inputData?.[keyPrefix + 'updated_at'],
        }
    },
}
