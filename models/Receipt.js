const _ = require('lodash')
const utils = require('../utils/utils');
const ReceiptType = require('./ReceiptType').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const ReceiptItemsListItem = require('./ReceiptItemsListItem').fields;
const ReceiptItemsListItemMapping = require('./ReceiptItemsListItem').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Receipt id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}date`,
                label: `Receipt date - [${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}number`,
                label: `Receipt number - [${labelPrefix}number]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}numeration`,
                label: `Receipt numeration - [${labelPrefix}numeration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `Receipt total net amount - [${labelPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Receipt total vat amount - [${labelPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Receipt total gross amount - [${labelPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}use_gross_prices`,
                label: `Receipt uses gross prices - [${labelPrefix}use_gross_prices]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}type`,
                ...ReceiptType(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}description`,
                label: `Receipt description - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rc_center`,
                label: `Receipt revenue center - [${labelPrefix}rc_center]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `Receipt creation date - [${labelPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Receipt last update date - [${labelPrefix}updated_at]`,
                type: 'string',
            },
            ...PaymentAccount(`${keyPrefix}payment_account`, isInput),
            {
                key: `${keyPrefix}items_list`,
                label: `${labelPrefix}items_list]`,
                children: ReceiptItemsListItem(`${keyPrefix}items_list${!isInput && '[]'}`), 
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
