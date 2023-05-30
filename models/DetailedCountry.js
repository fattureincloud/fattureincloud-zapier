const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}name`,
                label: `Country name. - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}settings_name`,
                label: `[${keyPrefix}settings_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iso`,
                label: `Country iso. - [${keyPrefix}iso]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscal_iso`,
                label: `[${keyPrefix}fiscal_iso]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}uic`,
                label: `Country uic. - [${keyPrefix}uic]`,
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
