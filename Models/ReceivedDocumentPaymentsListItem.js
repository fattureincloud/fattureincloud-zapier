const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentPaymentsListItem_payment_terms = require('./ReceivedDocumentPaymentsListItem_payment_terms').fields;
const ReceivedDocumentPaymentsListItem_payment_termsMapping = require('./ReceivedDocumentPaymentsListItem_payment_terms').mapping;
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
                label: labelPrefix + 'Unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'amount',
                label: labelPrefix + 'Amount of items.',
                type: 'number',
            },
            {
                key: keyPrefix + 'due_date',
                label: labelPrefix + 'Due date',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'paid_date',
                label: labelPrefix + 'Paid date',
                type: 'datetime',
            },
            ...ReceivedDocumentPaymentsListItem_payment_terms(keyPrefix + 'payment_terms'),
            {
                key: keyPrefix + 'status',
                label: labelPrefix + 'Payment status.',
                type: 'string',
            },
            ...PaymentAccount(keyPrefix + 'payment_account'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'amount': bundle.inputData?.[keyPrefix + 'amount'],
            'due_date': bundle.inputData?.[keyPrefix + 'due_date'],
            'paid_date': bundle.inputData?.[keyPrefix + 'paid_date'],
            'payment_terms': utils.removeIfEmpty(ReceivedDocumentPaymentsListItem_payment_termsMapping(bundle, keyPrefix + 'payment_terms')),
            'status': bundle.inputData?.[keyPrefix + 'status'],
            'payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'payment_account')),
        }
    },
}
