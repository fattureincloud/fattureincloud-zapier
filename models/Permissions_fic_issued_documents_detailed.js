const _ = require('lodash')
const utils = require('../utils/utils');
const PermissionLevel = require('./PermissionLevel').fields;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}quotes`,
                ...PermissionLevel(`${keyPrefix}quotes`),
            },
            {
                key: `${keyPrefix}proformas`,
                ...PermissionLevel(`${keyPrefix}proformas`),
            },
            {
                key: `${keyPrefix}invoices`,
                ...PermissionLevel(`${keyPrefix}invoices`),
            },
            {
                key: `${keyPrefix}receipts`,
                ...PermissionLevel(`${keyPrefix}receipts`),
            },
            {
                key: `${keyPrefix}delivery_notes`,
                ...PermissionLevel(`${keyPrefix}delivery_notes`),
            },
            {
                key: `${keyPrefix}credit_notes`,
                ...PermissionLevel(`${keyPrefix}credit_notes`),
            },
            {
                key: `${keyPrefix}orders`,
                ...PermissionLevel(`${keyPrefix}orders`),
            },
            {
                key: `${keyPrefix}work_reports`,
                ...PermissionLevel(`${keyPrefix}work_reports`),
            },
            {
                key: `${keyPrefix}supplier_orders`,
                ...PermissionLevel(`${keyPrefix}supplier_orders`),
            },
            {
                key: `${keyPrefix}self_invoices`,
                ...PermissionLevel(`${keyPrefix}self_invoices`),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'quotes': bundle.inputData?.[`${keyPrefix}quotes`],
            'proformas': bundle.inputData?.[`${keyPrefix}proformas`],
            'invoices': bundle.inputData?.[`${keyPrefix}invoices`],
            'receipts': bundle.inputData?.[`${keyPrefix}receipts`],
            'delivery_notes': bundle.inputData?.[`${keyPrefix}delivery_notes`],
            'credit_notes': bundle.inputData?.[`${keyPrefix}credit_notes`],
            'orders': bundle.inputData?.[`${keyPrefix}orders`],
            'work_reports': bundle.inputData?.[`${keyPrefix}work_reports`],
            'supplier_orders': bundle.inputData?.[`${keyPrefix}supplier_orders`],
            'self_invoices': bundle.inputData?.[`${keyPrefix}self_invoices`],
        }
    },
}
