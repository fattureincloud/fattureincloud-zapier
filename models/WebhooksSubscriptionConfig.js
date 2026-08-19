const utils = require('../utils/utils');
const WebhooksSubscriptionMapping = require('../models/WebhooksSubscriptionMapping');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}mapping`,
                ...WebhooksSubscriptionMapping.fields(`${keyPrefix}mapping`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'mapping': bundle.inputData?.[`${keyPrefix}mapping`],
        }
    },
}
