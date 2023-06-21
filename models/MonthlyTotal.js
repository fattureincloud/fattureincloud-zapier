const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}net`,
                label: `Monthly total net amount - [${labelPrefix}net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}gross`,
                label: `Monthly total gross amount - [${labelPrefix}gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}count`,
                label: `Monthly total receipt number - [${labelPrefix}count]`,
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
