const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}name`,
                label: `Country name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}settings_name`,
                label: `Country settings name - [${labelPrefix}settings_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iso`,
                label: `Country iso code - [${labelPrefix}iso]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscal_iso`,
                label: `Country fiscal iso code - [${labelPrefix}fiscal_iso]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}uic`,
                label: `Country uic - [${labelPrefix}uic]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'settings_name': bundle.inputData?.[`${keyPrefix}settings_name`],
            'iso': bundle.inputData?.[`${keyPrefix}iso`],
            'fiscal_iso': bundle.inputData?.[`${keyPrefix}fiscal_iso`],
            'uic': bundle.inputData?.[`${keyPrefix}uic`],
        }
    },
}
