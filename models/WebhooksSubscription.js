const _ = require('lodash')
const utils = require('../utils/utils');
const EventType = require('./EventType').fields;
const EventTypeMapping = require('./EventType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Unique identifier - [${keyPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sink`,
                label: `Webhooks callback uri. - [${keyPrefix}sink]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[Read Only] True if the webhooks subscription has been verified. - [${keyPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}types`,
                list: true,
                type: 'string',
                ...EventType(`${keyPrefix}types`),
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
