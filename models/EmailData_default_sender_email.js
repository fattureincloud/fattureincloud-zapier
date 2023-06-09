const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Default sender email id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}email`,
                label: `Default sender email address - [${keyPrefix}email]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
        }
    },
}
