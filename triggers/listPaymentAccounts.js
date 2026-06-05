const { listPaymentAccounts: listPaymentAccountsAction } = require('../apis/InfoApi');
const PaymentAccount = require('../models/PaymentAccount');
const { sanitizeOutputFields } = require('../utils/utils');

module.exports = {
  key: listPaymentAccountsAction.key + 'Trigger',
  noun: listPaymentAccountsAction.noun,
  display: {
    label: listPaymentAccountsAction.display.label,
    description: listPaymentAccountsAction.display.description,
    hidden: true,
  },
  operation: {
    outputFields: sanitizeOutputFields(PaymentAccount.fields('', false)),
    perform: async (z, bundle) => listPaymentAccountsAction.operation.perform(z, bundle),
  },
};
