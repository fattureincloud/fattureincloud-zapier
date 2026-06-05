const { listUserCompanies: listUserCompaniesAction } = require('../apis/UserApi');
const Company = require('../models/Company');
const { sanitizeOutputFields } = require('../utils/utils');

module.exports = {
  key: listUserCompaniesAction.key + 'Trigger',
  noun: listUserCompaniesAction.noun,
  display: {
    label: listUserCompaniesAction.display.label,
    description: listUserCompaniesAction.display.description,
    hidden: true,
  },
  operation: {
    outputFields: sanitizeOutputFields(Company.fields('', false)),
    perform: async (z, bundle) =>
      listUserCompaniesAction.operation
        .perform(z, bundle)
        .then((response) => response.data.companies),
  },
};
