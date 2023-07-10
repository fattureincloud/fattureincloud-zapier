const enrichedWebhook = require('../triggers/enrichedWebhook');
const listUserCompaniesTrigger = require('../triggers/listUserCompanies');
const listWebhooksResourceOperations = require('../triggers/listWebhooksResourceOperations');
const rawWebhook = require('../triggers/rawWebhook');

const dropdownTriggers = {
    [listUserCompaniesTrigger.key]: listUserCompaniesTrigger,
    [listWebhooksResourceOperations.key]: listWebhooksResourceOperations,
}

const webhooksTriggers = {
    [rawWebhook.key]: rawWebhook,
    [enrichedWebhook.key]: enrichedWebhook,
}

module.exports = {
    triggers: () => (
        {
            ...dropdownTriggers,
            ...webhooksTriggers,
        }
    )
}