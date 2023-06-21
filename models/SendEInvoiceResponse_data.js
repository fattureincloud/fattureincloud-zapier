const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}name`,
                label: `Response message. - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `E-invoice sent date. - [${labelPrefix}date]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
        }
    },
}
