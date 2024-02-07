const enrichedWebhook = require('../triggers/enrichedWebhook');
const listUserCompaniesTrigger = require('../triggers/listUserCompanies');
const listVatTypesTrigger = require('../triggers/listVatTypes');
const listPaymentAccountsTrigger = require('../triggers/listPaymentAccounts');
const listPaymentMethodsTrigger = require('../triggers/listPaymentMethods');
const listWebhooksResourceOperations = require('../triggers/listWebhooksResourceOperations');
const rawWebhook = require('../triggers/rawWebhook');

const dropdownTriggers = {
    [listUserCompaniesTrigger.key]: listUserCompaniesTrigger,
    [listVatTypesTrigger.key]: listVatTypesTrigger,
    [listPaymentAccountsTrigger.key]: listPaymentAccountsTrigger,
    [listPaymentMethodsTrigger.key]: listPaymentMethodsTrigger,
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