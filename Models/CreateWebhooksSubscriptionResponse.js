const _ = require('lodash')
const utils = require('../utils/utils');
const WebhooksSubscription = require('./WebhooksSubscription').fields;
const WebhooksSubscriptionMapping = require('./WebhooksSubscription').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...WebhooksSubscription(keyPrefix + 'data'),
            {
                key: keyPrefix + 'warnings',
                label: labelPrefix + 'Webhooks registration warnings',
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(WebhooksSubscriptionMapping(bundle, keyPrefix + 'data')),
            'warnings': bundle.inputData?.[keyPrefix + 'warnings'],
        }
    },
}
