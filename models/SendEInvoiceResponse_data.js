const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}name`,
                label: `Response message. - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `E-invoice sent date. - [${keyPrefix}date]`,
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
