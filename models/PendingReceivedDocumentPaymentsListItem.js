const utils = require('../utils/utils');
const PaymentAccount = require('../models/PaymentAccount');
const PendingReceivedDocumentPaymentsListItem_payment_terms = require('../models/PendingReceivedDocumentPaymentsListItem_payment_terms');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}amount`,
        label: `Pending received document payment total amount - [${labelPrefix}amount]`,
        type: 'number',
      },
      {
        key: `${keyPrefix}due_date`,
        label: `Due date - [${labelPrefix}due_date]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}paid_date`,
        label: `Pending received document payment paid date - [${labelPrefix}paid_date]`,
        type: 'string',
      },
      ...PendingReceivedDocumentPaymentsListItem_payment_terms.fields(
        `${keyPrefix}payment_terms`,
        isInput
      ),
      {
        key: `${keyPrefix}status`,
        label: `Pending received document payment status - [${labelPrefix}status]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}paid_with_ts_pay`,
        label: `True if paid with TS Pay - [${labelPrefix}paid_with_ts_pay]`,
        type: 'boolean',
      },
      ...PaymentAccount.fields(`${keyPrefix}payment_account`, isInput),
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      amount: bundle.inputData?.[`${keyPrefix}amount`],
      due_date: bundle.inputData?.[`${keyPrefix}due_date`],
      paid_date: bundle.inputData?.[`${keyPrefix}paid_date`],
      payment_terms: utils.removeIfEmpty(
        PendingReceivedDocumentPaymentsListItem_payment_terms.mapping(
          bundle,
          `${keyPrefix}payment_terms`
        )
      ),
      status: bundle.inputData?.[`${keyPrefix}status`],
      paid_with_ts_pay: bundle.inputData?.[`${keyPrefix}paid_with_ts_pay`],
      payment_account: utils.removeIfEmpty(
        PaymentAccount.mapping(bundle, `${keyPrefix}payment_account`)
      ),
    };
  },
};
