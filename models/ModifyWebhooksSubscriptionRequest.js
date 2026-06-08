const utils = require('../utils/utils');
const WebhooksSubscription = require('../models/WebhooksSubscription');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...WebhooksSubscription.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(WebhooksSubscription.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
