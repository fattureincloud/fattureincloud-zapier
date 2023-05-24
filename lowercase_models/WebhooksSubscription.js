const _ = require('lodash')
const utils = require('../utils/utils');
const EventType = require('./EventType').fields;
const EventTypeMapping = require('./EventType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'id',
                label: labelPrefix + 'Unique identifier',
                type: 'string',
            },
            {
                key: keyPrefix + 'sink',
                label: labelPrefix + 'Webhooks callback uri.',
                type: 'string',
            },
            {
                key: keyPrefix + 'verified',
                label: labelPrefix + '[Read Only] True if the webhooks subscription has been verified.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'types',
                list: true,
                type: 'string',
                ...EventType,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'sink': bundle.inputData?.[keyPrefix + 'sink'],
            'verified': bundle.inputData?.[keyPrefix + 'verified'],
            'types': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'types']),
        }
    },
}
