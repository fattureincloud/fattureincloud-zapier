const { retrieveResourceOperations } = require("../utils/utils");

module.exports = {
    key: 'listWebhooksResourceOperations',
    noun: 'listWebhooksResourceOperations',
    display: {
        label: 'listWebhooksResourceOperations',
        description: 'Lists the webhooks resource operations',
        hidden: true,
    },
    operation: {
        perform: async(z, bundle) => retrieveResourceOperations(bundle.inputData['resource'])
    }
}