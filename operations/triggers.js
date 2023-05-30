const listUserCompaniesTrigger = require('../triggers/listUserCompanies');

const dropdownTriggers = {
    [listUserCompaniesTrigger.key]: listUserCompaniesTrigger
}

const webhooksTriggers = {

}

module.exports = {
    triggers: () => (
        {
            ...dropdownTriggers,
            ...webhooksTriggers,
        }
    )
}