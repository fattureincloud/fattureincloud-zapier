const utils = require('../utils/utils');
const VerifyWebhooksSubscription = require('../models/VerifyWebhooksSubscription');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...VerifyWebhooksSubscription.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(VerifyWebhooksSubscription.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
