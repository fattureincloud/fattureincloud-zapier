const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentStatus = require('./IssuedDocumentStatus').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const IssuedDocumentPaymentsListItem_payment_terms = require('./IssuedDocumentPaymentsListItem_payment_terms').fields;
const IssuedDocumentPaymentsListItem_payment_termsMapping = require('./IssuedDocumentPaymentsListItem_payment_terms').mapping;

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
                key: keyPrefix + 'due_date',
                label: labelPrefix + 'Due date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'amount',
                label: labelPrefix + 'Payment amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'status',
                ...IssuedDocumentStatus,
            },
            ...PaymentAccount(keyPrefix + 'payment_account'),
            {
                key: keyPrefix + 'paid_date',
                label: labelPrefix + 'Payment date. [Only if status is paid]',
                type: 'datetime',
            },
            // ...(keyPrefix + 'ei_raw'),
            ...IssuedDocumentPaymentsListItem_payment_terms(keyPrefix + 'payment_terms'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'due_date': bundle.inputData?.[keyPrefix + 'due_date'],
            'amount': bundle.inputData?.[keyPrefix + 'amount'],
            'status': bundle.inputData?.[keyPrefix + 'status'],
            'payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'payment_account')),
            'paid_date': bundle.inputData?.[keyPrefix + 'paid_date'],
            // 'ei_raw': utils.removeIfEmpty(Mapping(bundle, keyPrefix + 'ei_raw')),
            'payment_terms': utils.removeIfEmpty(IssuedDocumentPaymentsListItem_payment_termsMapping(bundle, keyPrefix + 'payment_terms')),
        }
    },
}
