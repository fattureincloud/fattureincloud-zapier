const _ = require('lodash')
const utils = require('../utils/utils');
const CashbookEntryKind = require('./CashbookEntryKind').fields;
const CashbookEntryType = require('./CashbookEntryType').fields;
const CashbookEntry_document = require('./CashbookEntry_document').fields;
const CashbookEntry_documentMapping = require('./CashbookEntry_document').mapping;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Cashbook id - [${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `Cashbook date - [${labelPrefix}date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}description`,
                label: `Cashbook description - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kind`,
                ...CashbookEntryKind(`${keyPrefix}kind`, isInput),
            },
            {
                key: `${keyPrefix}type`,
                ...CashbookEntryType(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}entity_name`,
                label: `Cashbook entity name - [${labelPrefix}entity_name]`,
                type: 'string',
            },
            ...CashbookEntry_document(`${keyPrefix}document`, isInput),
            {
                key: `${keyPrefix}amount_in`,
                label: `[Only for cashbook entry in] Cashbook total amount in - [${labelPrefix}amount_in]`,
                type: 'number',
            },
            ...PaymentAccount(`${keyPrefix}payment_account_in`, isInput),
            {
                key: `${keyPrefix}amount_out`,
                label: `[Only for cashbook entry out] Cashbook total amount out - [${labelPrefix}amount_out]`,
                type: 'number',
            },
            ...PaymentAccount(`${keyPrefix}payment_account_out`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'entity_name': bundle.inputData?.[`${keyPrefix}entity_name`],
            'document': utils.removeIfEmpty(CashbookEntry_documentMapping(bundle, `${keyPrefix}document`)),
            'amount_in': bundle.inputData?.[`${keyPrefix}amount_in`],
            'payment_account_in': utils.removeIfEmpty(PaymentAccountMapping(bundle, `${keyPrefix}payment_account_in`)),
            'amount_out': bundle.inputData?.[`${keyPrefix}amount_out`],
            'payment_account_out': utils.removeIfEmpty(PaymentAccountMapping(bundle, `${keyPrefix}payment_account_out`)),
        }
    },
}
