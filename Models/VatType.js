const _ = require('lodash')
const utils = require('../utils/utils');

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
                key: keyPrefix + 'value',
                label: labelPrefix + '[Read Only] Percentual value.',
                type: 'number',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Short description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'notes',
                label: labelPrefix + 'Long description and notes shown in documents.',
                type: 'string',
            },
            {
                key: keyPrefix + 'e_invoice',
                label: labelPrefix + 'Usable for e-invoices.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ei_type',
                label: labelPrefix + 'E-invoice type (natura).',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_description',
                label: labelPrefix + 'E-invoice description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'editable',
                label: labelPrefix + '[Read Only] Determine if this vat type is editable.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'is_disabled',
                label: labelPrefix + 'Determine if the vat type is disabled.',
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'value': bundle.inputData?.[keyPrefix + 'value'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
            'notes': bundle.inputData?.[keyPrefix + 'notes'],
            'e_invoice': bundle.inputData?.[keyPrefix + 'e_invoice'],
            'ei_type': bundle.inputData?.[keyPrefix + 'ei_type'],
            'ei_description': bundle.inputData?.[keyPrefix + 'ei_description'],
            'editable': bundle.inputData?.[keyPrefix + 'editable'],
            'is_disabled': bundle.inputData?.[keyPrefix + 'is_disabled'],
        }
    },
}
