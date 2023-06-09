const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}filename`,
                label: `Email attachment filename - [${keyPrefix}filename]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `Email attachment url - [${keyPrefix}url]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
        }
    },
}
