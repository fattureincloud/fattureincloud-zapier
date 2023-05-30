const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}days`,
                label: `Number of days. - [${keyPrefix}days]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${keyPrefix}type]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'days': bundle.inputData?.[`${keyPrefix}days`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
