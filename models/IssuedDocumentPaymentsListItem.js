const utils = require('../utils/utils');
const IssuedDocumentPaymentsListItem_payment_terms = require('../models/IssuedDocumentPaymentsListItem_payment_terms');
const IssuedDocumentStatus = require('../models/IssuedDocumentStatus');
const PaymentAccount = require('../models/PaymentAccount');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Issued document payment item id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}due_date`,
                label: `Issued document payment due date - [${labelPrefix}due_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount`,
                label: `Issued document payment amount - [${labelPrefix}amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}status`,
                ...IssuedDocumentStatus.fields(`${keyPrefix}status`, isInput),
            },
            ...PaymentAccount.fields(`${keyPrefix}payment_account`, isInput),
            {
                key: `${keyPrefix}paid_date`,
                label: `Issued document payment date [Only if status is paid] - [${labelPrefix}paid_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Issued document payment advanced raw attributes for e-invoices - [${labelPrefix}ei_raw]`,
                type: 'string',
            },
            ...IssuedDocumentPaymentsListItem_payment_terms.fields(`${keyPrefix}payment_terms`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'due_date': bundle.inputData?.[`${keyPrefix}due_date`],
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'payment_account': utils.removeIfEmpty(PaymentAccount.mapping(bundle, `${keyPrefix}payment_account`)),
            'paid_date': bundle.inputData?.[`${keyPrefix}paid_date`],
            'ei_raw': JSON.parse(bundle.inputData?.[`${keyPrefix}ei_raw`]),
            'payment_terms': utils.removeIfEmpty(IssuedDocumentPaymentsListItem_payment_terms.mapping(bundle, `${keyPrefix}payment_terms`)),
        }
    },
}
