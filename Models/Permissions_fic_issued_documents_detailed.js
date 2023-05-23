const _ = require('lodash')
const utils = require('../utils/utils');
const PermissionLevel = require('./PermissionLevel').fields;

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
                key: keyPrefix + 'quotes',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'proformas',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'invoices',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'receipts',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'delivery_notes',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'credit_notes',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'orders',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'work_reports',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'supplier_orders',
                ...PermissionLevel,
            },
            {
                key: keyPrefix + 'self_invoices',
                ...PermissionLevel,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'quotes': bundle.inputData?.[keyPrefix + 'quotes'],
            'proformas': bundle.inputData?.[keyPrefix + 'proformas'],
            'invoices': bundle.inputData?.[keyPrefix + 'invoices'],
            'receipts': bundle.inputData?.[keyPrefix + 'receipts'],
            'delivery_notes': bundle.inputData?.[keyPrefix + 'delivery_notes'],
            'credit_notes': bundle.inputData?.[keyPrefix + 'credit_notes'],
            'orders': bundle.inputData?.[keyPrefix + 'orders'],
            'work_reports': bundle.inputData?.[keyPrefix + 'work_reports'],
            'supplier_orders': bundle.inputData?.[keyPrefix + 'supplier_orders'],
            'self_invoices': bundle.inputData?.[keyPrefix + 'self_invoices'],
        }
    },
}
