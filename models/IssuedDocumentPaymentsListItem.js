const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentStatus = require('./IssuedDocumentStatus').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const IssuedDocumentPaymentsListItem_payment_terms = require('./IssuedDocumentPaymentsListItem_payment_terms').fields;
const IssuedDocumentPaymentsListItem_payment_termsMapping = require('./IssuedDocumentPaymentsListItem_payment_terms').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Issued document payment item id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}due_date`,
                label: `Issued document payment due date - [${labelPrefix}due_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}amount`,
                label: `Issued document payment amount - [${labelPrefix}amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}status`,
                ...IssuedDocumentStatus(`${keyPrefix}status`, isInput),
            },
            ...PaymentAccount(`${keyPrefix}payment_account`, isInput),
            {
                key: `${keyPrefix}paid_date`,
                label: `Issued document payment date [Only if status is paid] - [${labelPrefix}paid_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Issued document payment advanced raw attributes for e-invoices - [${labelPrefix}ei_raw]`,
                dict: true,
            },
            ...IssuedDocumentPaymentsListItem_payment_terms(`${keyPrefix}payment_terms`, isInput),
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
