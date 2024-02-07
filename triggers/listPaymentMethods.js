const { listPaymentMethods: listPaymentMethodsTrigger } = require("../apis/InfoApi")
const PaymentMethod = require("../models/PaymentMethod")

module.exports = {
    key: listPaymentMethodsTrigger.key + 'Trigger',
        noun: listPaymentMethodsTrigger.noun,
        display: {
            label: listPaymentMethodsTrigger.display.label,
            description: listPaymentMethodsTrigger.display.description,
            hidden: true,
        },
        operation: {
            outputFields: [
                {
                    key: 'payment_methods',
                    children: PaymentMethod.fields(),
                }
            ],
            perform: async(z, bundle) => listPaymentMethodsTrigger.operation.perform(z, bundle)
        }
}