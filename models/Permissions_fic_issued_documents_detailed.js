const utils = require('../utils/utils');
const PermissionLevel = require('../models/PermissionLevel');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}quotes`,
                ...PermissionLevel.fields(`${keyPrefix}quotes`, isInput),
            },
            {
                key: `${keyPrefix}proformas`,
                ...PermissionLevel.fields(`${keyPrefix}proformas`, isInput),
            },
            {
                key: `${keyPrefix}invoices`,
                ...PermissionLevel.fields(`${keyPrefix}invoices`, isInput),
            },
            {
                key: `${keyPrefix}receipts`,
                ...PermissionLevel.fields(`${keyPrefix}receipts`, isInput),
            },
            {
                key: `${keyPrefix}delivery_notes`,
                ...PermissionLevel.fields(`${keyPrefix}delivery_notes`, isInput),
            },
            {
                key: `${keyPrefix}credit_notes`,
                ...PermissionLevel.fields(`${keyPrefix}credit_notes`, isInput),
            },
            {
                key: `${keyPrefix}orders`,
                ...PermissionLevel.fields(`${keyPrefix}orders`, isInput),
            },
            {
                key: `${keyPrefix}work_reports`,
                ...PermissionLevel.fields(`${keyPrefix}work_reports`, isInput),
            },
            {
                key: `${keyPrefix}supplier_orders`,
                ...PermissionLevel.fields(`${keyPrefix}supplier_orders`, isInput),
            },
            {
                key: `${keyPrefix}self_invoices`,
                ...PermissionLevel.fields(`${keyPrefix}self_invoices`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
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
