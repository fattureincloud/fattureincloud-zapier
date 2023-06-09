const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Cashbook related document id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                label: `Cashbook related document type - [${keyPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `Cashbook related document path - [${keyPrefix}path]`,
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
