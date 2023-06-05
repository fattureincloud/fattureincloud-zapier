const genericWebhook = require('../triggers/genericWebhook');
const listUserCompaniesTrigger = require('../triggers/listUserCompanies');
const listWebhooksResourceOperations = require('../triggers/listWebhooksResourceOperations');

const dropdownTriggers = {
    [listUserCompaniesTrigger.key]: listUserCompaniesTrigger,
    [listWebhooksResourceOperations.key]: listWebhooksResourceOperations,
}

const webhooksTriggers = {
    [genericWebhook.key]: genericWebhook
}

module.exports = {
    triggers: () => (
        {
            ...dropdownTriggers,
            ...webhooksTriggers,
        }
    )
}