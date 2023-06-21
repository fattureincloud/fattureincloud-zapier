const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}archive`,
                label: `[${labelPrefix}archive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}cerved`,
                label: `[${labelPrefix}cerved]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}document_attachments`,
                label: `[${labelPrefix}document_attachments]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `[${labelPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}genius`,
                label: `[${labelPrefix}genius]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}mail_tracking`,
                label: `[${labelPrefix}mail_tracking]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}payment_notifications`,
                label: `[${labelPrefix}payment_notifications]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}paypal`,
                label: `[${labelPrefix}paypal]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}receipts`,
                label: `[${labelPrefix}receipts]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}recurring`,
                label: `[${labelPrefix}recurring]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}smtp`,
                label: `[${labelPrefix}smtp]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}sofort`,
                label: `[${labelPrefix}sofort]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}stock`,
                label: `[${labelPrefix}stock]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}subaccounts`,
                label: `[${labelPrefix}subaccounts]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tessera_sanitaria`,
                label: `[${labelPrefix}tessera_sanitaria]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_digital`,
                label: `[${labelPrefix}ts_digital]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_invoice_trading`,
                label: `[${labelPrefix}ts_invoice_trading]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_pay`,
                label: `[${labelPrefix}ts_pay]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'archive': bundle.inputData?.[`${keyPrefix}archive`],
            'cerved': bundle.inputData?.[`${keyPrefix}cerved`],
            'document_attachments': bundle.inputData?.[`${keyPrefix}document_attachments`],
            'e_invoice': bundle.inputData?.[`${keyPrefix}e_invoice`],
            'genius': bundle.inputData?.[`${keyPrefix}genius`],
            'mail_tracking': bundle.inputData?.[`${keyPrefix}mail_tracking`],
            'payment_notifications': bundle.inputData?.[`${keyPrefix}payment_notifications`],
            'paypal': bundle.inputData?.[`${keyPrefix}paypal`],
            'receipts': bundle.inputData?.[`${keyPrefix}receipts`],
            'recurring': bundle.inputData?.[`${keyPrefix}recurring`],
            'smtp': bundle.inputData?.[`${keyPrefix}smtp`],
            'sofort': bundle.inputData?.[`${keyPrefix}sofort`],
            'stock': bundle.inputData?.[`${keyPrefix}stock`],
            'subaccounts': bundle.inputData?.[`${keyPrefix}subaccounts`],
            'tessera_sanitaria': bundle.inputData?.[`${keyPrefix}tessera_sanitaria`],
            'ts_digital': bundle.inputData?.[`${keyPrefix}ts_digital`],
            'ts_invoice_trading': bundle.inputData?.[`${keyPrefix}ts_invoice_trading`],
            'ts_pay': bundle.inputData?.[`${keyPrefix}ts_pay`],
        }
    },
}
