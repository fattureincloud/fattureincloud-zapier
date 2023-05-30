const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}clients`,
                label: `[${keyPrefix}clients]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}suppliers`,
                label: `[${keyPrefix}suppliers]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}products`,
                label: `[${keyPrefix}products]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}documents`,
                label: `[${keyPrefix}documents]`,
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
