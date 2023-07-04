const _ = require('lodash')
const utils = require('../utils/utils');
const WebhooksSubscription = require('../models/WebhooksSubscription');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...WebhooksSubscription.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(WebhooksSubscription.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
