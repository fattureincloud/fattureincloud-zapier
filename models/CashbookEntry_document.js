const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Cashbook related document id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                label: `Cashbook related document type - [${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `Cashbook related document path - [${labelPrefix}path]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
        }
    },
}
