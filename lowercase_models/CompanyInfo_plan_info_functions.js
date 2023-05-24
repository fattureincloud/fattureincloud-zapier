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
                key: keyPrefix + 'archive',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'cerved',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'document_attachments',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'e_invoice',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'genius',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'mail_tracking',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'payment_notifications',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'paypal',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'receipts',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'recurring',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'smtp',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'sofort',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'stock',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'subaccounts',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'tessera_sanitaria',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ts_digital',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ts_invoice_trading',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ts_pay',
                
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'archive': bundle.inputData?.[keyPrefix + 'archive'],
            'cerved': bundle.inputData?.[keyPrefix + 'cerved'],
            'document_attachments': bundle.inputData?.[keyPrefix + 'document_attachments'],
            'e_invoice': bundle.inputData?.[keyPrefix + 'e_invoice'],
            'genius': bundle.inputData?.[keyPrefix + 'genius'],
            'mail_tracking': bundle.inputData?.[keyPrefix + 'mail_tracking'],
            'payment_notifications': bundle.inputData?.[keyPrefix + 'payment_notifications'],
            'paypal': bundle.inputData?.[keyPrefix + 'paypal'],
            'receipts': bundle.inputData?.[keyPrefix + 'receipts'],
            'recurring': bundle.inputData?.[keyPrefix + 'recurring'],
            'smtp': bundle.inputData?.[keyPrefix + 'smtp'],
            'sofort': bundle.inputData?.[keyPrefix + 'sofort'],
            'stock': bundle.inputData?.[keyPrefix + 'stock'],
            'subaccounts': bundle.inputData?.[keyPrefix + 'subaccounts'],
            'tessera_sanitaria': bundle.inputData?.[keyPrefix + 'tessera_sanitaria'],
            'ts_digital': bundle.inputData?.[keyPrefix + 'ts_digital'],
            'ts_invoice_trading': bundle.inputData?.[keyPrefix + 'ts_invoice_trading'],
            'ts_pay': bundle.inputData?.[keyPrefix + 'ts_pay'],
        }
    },
}
