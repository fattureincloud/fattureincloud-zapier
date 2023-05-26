const UserApi = require("../apis/UserApi")
const Company = require("../models/Company")

let listUserCompaniesAction = UserApi.listUserCompanies

module.exports = {
    key: listUserCompaniesAction.key + 'Trigger',
        noun: listUserCompaniesAction.noun,
        display: {
            label: listUserCompaniesAction.display.label,
            description: listUserCompaniesAction.display.description,
            hidden: true,
        },
        operation: {
            outputFields: [
                {
                    key: 'companies',
                    children: Company.fields(), 
                }
            ],
            perform: async(z, bundle) => listUserCompaniesAction.operation.perform(z, bundle).then((response) => response.data.companies)
        }
}