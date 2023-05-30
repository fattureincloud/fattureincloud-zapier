const _ = require('lodash')
const utils = require('../utils/utils');
const WebhooksSubscription = require('./WebhooksSubscription').fields;
const WebhooksSubscriptionMapping = require('./WebhooksSubscription').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...WebhooksSubscription(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(WebhooksSubscriptionMapping(bundle, `${keyPrefix}data`)),
        }
    },
}