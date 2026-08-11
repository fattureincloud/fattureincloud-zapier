const utils = require('../utils/utils');
const WebhooksSubscription = require('../models/WebhooksSubscription');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...WebhooksSubscription.fields(`${keyPrefix}data`, isInput),
            {
                key: `${keyPrefix}warnings`,
                label: `Webhooks registration warnings - [${labelPrefix}warnings]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(WebhooksSubscription.mapping(bundle, `${keyPrefix}data`)),
            'warnings': bundle.inputData?.[`${keyPrefix}warnings`],
        }
    },
}
