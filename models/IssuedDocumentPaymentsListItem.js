const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentStatus = require('./IssuedDocumentStatus').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const IssuedDocumentPaymentsListItem_payment_terms = require('./IssuedDocumentPaymentsListItem_payment_terms').fields;
const IssuedDocumentPaymentsListItem_payment_termsMapping = require('./IssuedDocumentPaymentsListItem_payment_terms').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Unique identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}due_date`,
                label: `Due date. - [${keyPrefix}due_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}amount`,
                label: `Payment amount. - [${keyPrefix}amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}status`,
                ...IssuedDocumentStatus(`${keyPrefix}status`),
            },
            ...PaymentAccount(`${keyPrefix}payment_account`),
            {
                key: `${keyPrefix}paid_date`,
                label: `Payment date. [Only if status is paid] - [${keyPrefix}paid_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Advanced raw attributes for e-invoices. - [${keyPrefix}ei_raw]`,
                dict: true,
            },
            ...IssuedDocumentPaymentsListItem_payment_terms(`${keyPrefix}payment_terms`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'due_date': bundle.inputData?.[`${keyPrefix}due_date`],
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, `${keyPrefix}payment_account`)),
            'paid_date': bundle.inputData?.[`${keyPrefix}paid_date`],
            'ei_raw': bundle.inputData?.[`${keyPrefix}ei_raw`],
            'payment_terms': utils.removeIfEmpty(IssuedDocumentPaymentsListItem_payment_termsMapping(bundle, `${keyPrefix}payment_terms`)),
        }
    },
}
