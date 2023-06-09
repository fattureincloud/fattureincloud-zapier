const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}clients`,
                label: `Company plan clients limits - [${keyPrefix}clients]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}suppliers`,
                label: `Company plan suppliers limits - [${keyPrefix}suppliers]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}products`,
                label: `Company plan products limits - [${keyPrefix}products]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}documents`,
                label: `Company plan documents limits - [${keyPrefix}documents]`,
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
