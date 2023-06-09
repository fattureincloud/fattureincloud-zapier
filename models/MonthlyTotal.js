const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}net`,
                label: `Monthly total net amount - [${keyPrefix}net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}gross`,
                label: `Monthly total gross amount - [${keyPrefix}gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}count`,
                label: `Monthly total receipt number - [${keyPrefix}count]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'net': bundle.inputData?.[`${keyPrefix}net`],
            'gross': bundle.inputData?.[`${keyPrefix}gross`],
            'count': bundle.inputData?.[`${keyPrefix}count`],
        }
    },
}
