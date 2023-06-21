const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}clients`,
                label: `Company plan clients limits - [${labelPrefix}clients]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}suppliers`,
                label: `Company plan suppliers limits - [${labelPrefix}suppliers]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}products`,
                label: `Company plan products limits - [${labelPrefix}products]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}documents`,
                label: `Company plan documents limits - [${labelPrefix}documents]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'clients': bundle.inputData?.[`${keyPrefix}clients`],
            'suppliers': bundle.inputData?.[`${keyPrefix}suppliers`],
            'products': bundle.inputData?.[`${keyPrefix}products`],
            'documents': bundle.inputData?.[`${keyPrefix}documents`],
        }
    },
}
