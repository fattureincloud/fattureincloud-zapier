const { listPaymentAccounts: listPaymentAccountsAction } = require("../apis/InfoApi")
const PaymentAccount = require("../models/PaymentAccount")

module.exports = {
    key: listPaymentAccountsAction.key + 'Trigger',
        noun: listPaymentAccountsAction.noun,
        display: {
            label: listPaymentAccountsAction.display.label,
            description: listPaymentAccountsAction.display.description,
            hidden: true,
        },
        operation: {
            outputFields: [
                {
                    key: 'payment_accounts',
                    children: PaymentAccount.fields(),
                }
            ],
            perform: async(z, bundle) => listPaymentAccountsAction.operation.perform(z, bundle)
        }
}