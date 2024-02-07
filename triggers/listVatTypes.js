const { listVatTypes: listVatTypesAction} = require("../apis/InfoApi")
const VatType = require("../models/VatType")

module.exports = {
    key: listVatTypesAction.key + 'Trigger',
        noun: listVatTypesAction.noun,
        display: {
            label: listVatTypesAction.display.label,
            description: listVatTypesAction.display.description,
            hidden: true,
        },
        operation: {
            outputFields: [
                {
                    key: 'vat_types',
                    children: VatType.fields(), 
                }
            ],
            perform: async(z, bundle) => listVatTypesAction.operation.perform(z, bundle).
                then((response) => response.map(
                        (vatType) => ({ id: vatType.id, name: [vatType.value, vatType.description].join('% - ') })
                    ))
        }
}