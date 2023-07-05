const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}postal_code`,
                label: `City postal code - [${labelPrefix}postal_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}city`,
                label: `City name - [${labelPrefix}city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}province`,
                label: `City province - [${labelPrefix}province]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'postal_code': bundle.inputData?.[`${keyPrefix}postal_code`],
            'city': bundle.inputData?.[`${keyPrefix}city`],
            'province': bundle.inputData?.[`${keyPrefix}province`],
        }
    },
}
