const utils = require('../utils/utils');
const EventType = require('../models/EventType');
const WebhooksSubscriptionConfig = require('../models/WebhooksSubscriptionConfig');
const WebhooksSubscriptionVerificationMethod = require('../models/WebhooksSubscriptionVerificationMethod');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Webhooks subscription id - [${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sink`,
                label: `Webhooks callback uri. - [${labelPrefix}sink]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[Read Only] True if the webhooks subscription has been verified. - [${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}types`,
                list: true,
                type: 'string',
                ...EventType.fields(`${keyPrefix}types`, isInput),
            },
            ...WebhooksSubscriptionConfig.fields(`${keyPrefix}config`, isInput),
            {
                key: `${keyPrefix}verification_method`,
                ...WebhooksSubscriptionVerificationMethod.fields(`${keyPrefix}verification_method`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'sink': bundle.inputData?.[`${keyPrefix}sink`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'types': utils.childMapping(bundle.inputData?.[`${keyPrefix}types`], `${keyPrefix}types`, EventType),
            'config': utils.removeIfEmpty(WebhooksSubscriptionConfig.mapping(bundle, `${keyPrefix}config`)),
            'verification_method': bundle.inputData?.[`${keyPrefix}verification_method`],
        }
    },
}
