const _ = require('lodash')
const utils = require('../utils/utils');
const CashbookEntryKind = require('./CashbookEntryKind').fields;
const CashbookEntryType = require('./CashbookEntryType').fields;
const CashbookEntry_document = require('./CashbookEntry_document').fields;
const CashbookEntry_documentMapping = require('./CashbookEntry_document').mapping;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;

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
                label: labelPrefix + 'Cashbook unique identifier.',
                type: 'string',
            },
            {
                key: keyPrefix + 'date',
                label: labelPrefix + 'Cashbook date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Cashbook description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'kind',
                ...CashbookEntryKind,
            },
            {
                key: keyPrefix + 'type',
                ...CashbookEntryType,
            },
            {
                key: keyPrefix + 'entity_name',
                label: labelPrefix + 'Entity name.',
                type: 'string',
            },
            ...CashbookEntry_document(keyPrefix + 'document'),
            {
                key: keyPrefix + 'amount_in',
                label: labelPrefix + '[Only for cashbook entry in] Total amount in.',
                type: 'number',
            },
            ...PaymentAccount(keyPrefix + 'payment_account_in'),
            {
                key: keyPrefix + 'amount_out',
                label: labelPrefix + '[Only for cashbook entry out] Total amount out.',
                type: 'number',
            },
            ...PaymentAccount(keyPrefix + 'payment_account_out'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'date': bundle.inputData?.[keyPrefix + 'date'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
            'kind': bundle.inputData?.[keyPrefix + 'kind'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'entity_name': bundle.inputData?.[keyPrefix + 'entity_name'],
            'document': utils.removeIfEmpty(CashbookEntry_documentMapping(bundle, keyPrefix + 'document')),
            'amount_in': bundle.inputData?.[keyPrefix + 'amount_in'],
            'payment_account_in': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'payment_account_in')),
            'amount_out': bundle.inputData?.[keyPrefix + 'amount_out'],
            'payment_account_out': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'payment_account_out')),
        }
    },
}
