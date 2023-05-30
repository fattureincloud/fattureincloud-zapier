const _ = require('lodash')
const utils = require('../utils/utils');
const ReceiptType = require('./ReceiptType').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const ReceiptItemsListItem = require('./ReceiptItemsListItem').fields;
const ReceiptItemsListItemMapping = require('./ReceiptItemsListItem').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Receipt unique identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}date`,
                label: `Receipt date. - [${keyPrefix}date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}number`,
                label: `Receipt number. - [${keyPrefix}number]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}numeration`,
                label: `If it&#39;s null or empty string use the default numeration. - [${keyPrefix}numeration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `Total net amount. - [${keyPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Total vat amount. - [${keyPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Total gross amount. - [${keyPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}use_gross_prices`,
                label: `[${keyPrefix}use_gross_prices]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}type`,
                ...ReceiptType(`${keyPrefix}type`),
            },
            {
                key: `${keyPrefix}description`,
                label: `Receipt description. - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rc_center`,
                label: `Revenue center. - [${keyPrefix}rc_center]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${keyPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${keyPrefix}updated_at]`,
                type: 'string',
            },
            ...PaymentAccount(`${keyPrefix}payment_account`),
            {
                key: `${keyPrefix}items_list`,
                label: `${keyPrefix}items_list]`,
                children: ReceiptItemsListItem(`${keyPrefix}items_list`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'number': bundle.inputData?.[`${keyPrefix}number`],
            'numeration': bundle.inputData?.[`${keyPrefix}numeration`],
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'use_gross_prices': bundle.inputData?.[`${keyPrefix}use_gross_prices`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'rc_center': bundle.inputData?.[`${keyPrefix}rc_center`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
            'payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, `${keyPrefix}payment_account`)),
            'items_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}items_list`]),
        }
    },
}
