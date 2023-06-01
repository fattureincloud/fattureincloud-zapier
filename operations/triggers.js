const baseWebhook = require('../triggers/baseWebhook');
const listUserCompaniesTrigger = require('../triggers/listUserCompanies');

const dropdownTriggers = {
    [listUserCompaniesTrigger.key]: listUserCompaniesTrigger
}

const webhooksTriggers = {
    [baseWebhook.key]: baseWebhook
}

module.exports = {
    triggers: () => (
        {
            ...dropdownTriggers,
            ...webhooksTriggers,
        }
    )
}