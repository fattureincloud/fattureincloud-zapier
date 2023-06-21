const _ = require('lodash')
const utils = require('../utils/utils');
const PermissionLevel = require('./PermissionLevel').fields;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}quotes`,
                ...PermissionLevel(`${keyPrefix}quotes`, isInput),
            },
            {
                key: `${keyPrefix}proformas`,
                ...PermissionLevel(`${keyPrefix}proformas`, isInput),
            },
            {
                key: `${keyPrefix}invoices`,
                ...PermissionLevel(`${keyPrefix}invoices`, isInput),
            },
            {
                key: `${keyPrefix}receipts`,
                ...PermissionLevel(`${keyPrefix}receipts`, isInput),
            },
            {
                key: `${keyPrefix}delivery_notes`,
                ...PermissionLevel(`${keyPrefix}delivery_notes`, isInput),
            },
            {
                key: `${keyPrefix}credit_notes`,
                ...PermissionLevel(`${keyPrefix}credit_notes`, isInput),
            },
            {
                key: `${keyPrefix}orders`,
                ...PermissionLevel(`${keyPrefix}orders`, isInput),
            },
            {
                key: `${keyPrefix}work_reports`,
                ...PermissionLevel(`${keyPrefix}work_reports`, isInput),
            },
            {
                key: `${keyPrefix}supplier_orders`,
                ...PermissionLevel(`${keyPrefix}supplier_orders`, isInput),
            },
            {
                key: `${keyPrefix}self_invoices`,
                ...PermissionLevel(`${keyPrefix}self_invoices`, isInput),
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
