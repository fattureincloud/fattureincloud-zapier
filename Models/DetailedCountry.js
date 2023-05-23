const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Country name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'settings_name',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'iso',
                label: labelPrefix + 'Country iso.',
                type: 'string',
            },
            {
                key: keyPrefix + 'fiscal_iso',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'uic',
                label: labelPrefix + 'Country uic.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'settings_name': bundle.inputData?.[keyPrefix + 'settings_name'],
            'iso': bundle.inputData?.[keyPrefix + 'iso'],
            'fiscal_iso': bundle.inputData?.[keyPrefix + 'fiscal_iso'],
            'uic': bundle.inputData?.[keyPrefix + 'uic'],
        }
    },
}
