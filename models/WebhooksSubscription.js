const _ = require('lodash')
const utils = require('../utils/utils');
const EventType = require('./EventType').fields;
const EventTypeMapping = require('./EventType').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
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
                ...EventType(`${keyPrefix}types`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'sink': bundle.inputData?.[`${keyPrefix}sink`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'types': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}types`]),
        }
    },
}
