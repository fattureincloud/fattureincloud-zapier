const {
  listPaymentMethods: listPaymentMethodsTrigger,
} = require("../apis/InfoApi");
const PaymentMethod = require("../models/PaymentMethod");
const { sanitizeOutputFields } = require("../utils/utils");

module.exports = {
  key: listPaymentMethodsTrigger.key + "Trigger",
  noun: listPaymentMethodsTrigger.noun,
  display: {
    label: listPaymentMethodsTrigger.display.label,
    description: listPaymentMethodsTrigger.display.description,
    hidden: true,
  },
  operation: {
    outputFields: sanitizeOutputFields(PaymentMethod.fields("", false)),
    perform: async (z, bundle) =>
      listPaymentMethodsTrigger.operation.perform(z, bundle),
  },
};
