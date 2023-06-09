const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}postal_code`,
                label: `City postal code - [${keyPrefix}postal_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}city`,
                label: `City name - [${keyPrefix}city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}province`,
                label: `City province - [${keyPrefix}province]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'postal_code': bundle.inputData?.[`${keyPrefix}postal_code`],
            'city': bundle.inputData?.[`${keyPrefix}city`],
            'province': bundle.inputData?.[`${keyPrefix}province`],
        }
    },
}
