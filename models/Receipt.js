const _ = require('lodash')
const utils = require('../utils/utils');
const ReceiptType = require('./ReceiptType').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const ReceiptItemsListItem = require('./ReceiptItemsListItem').fields;
const ReceiptItemsListItemMapping = require('./ReceiptItemsListItem').mapping;

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
                label: labelPrefix + 'Receipt unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'date',
                label: labelPrefix + 'Receipt date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'number',
                label: labelPrefix + 'Receipt number.',
                type: 'number',
            },
            {
                key: keyPrefix + 'numeration',
                label: labelPrefix + 'If it&#39;s null or empty string use the default numeration.',
                type: 'string',
            },
            {
                key: keyPrefix + 'amount_net',
                label: labelPrefix + 'Total net amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_vat',
                label: labelPrefix + 'Total vat amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_gross',
                label: labelPrefix + 'Total gross amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'use_gross_prices',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'type',
                ...ReceiptType,
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Receipt description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'rc_center',
                label: labelPrefix + 'Revenue center.',
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
            ...PaymentAccount(keyPrefix + 'payment_account'),
            {
                key: keyPrefix + 'items_list',
                
                children: ReceiptItemsListItem(keyPrefix + 'items_list'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'date': bundle.inputData?.[keyPrefix + 'date'],
            'number': bundle.inputData?.[keyPrefix + 'number'],
            'numeration': bundle.inputData?.[keyPrefix + 'numeration'],
            'amount_net': bundle.inputData?.[keyPrefix + 'amount_net'],
            'amount_vat': bundle.inputData?.[keyPrefix + 'amount_vat'],
            'amount_gross': bundle.inputData?.[keyPrefix + 'amount_gross'],
            'use_gross_prices': bundle.inputData?.[keyPrefix + 'use_gross_prices'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
            'rc_center': bundle.inputData?.[keyPrefix + 'rc_center'],
            'created_at': bundle.inputData?.[keyPrefix + 'created_at'],
            'updated_at': bundle.inputData?.[keyPrefix + 'updated_at'],
            'payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'payment_account')),
            'items_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'items_list']),
        }
    },
}
