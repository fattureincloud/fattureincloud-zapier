const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}filename`,
                label: `Email attachment filename - [${labelPrefix}filename]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `Email attachment url - [${labelPrefix}url]`,
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
