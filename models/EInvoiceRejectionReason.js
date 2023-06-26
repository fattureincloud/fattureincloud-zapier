const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}reason`,
                label: `E-invoice rejection reason - [${labelPrefix}reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_status`,
                label: `E-invoice status - [${labelPrefix}ei_status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}solution`,
                label: `Error solution. - [${labelPrefix}solution]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `E-invoice rejection error code - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `E-invoice rejection date - [${labelPrefix}date]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'ei_status': bundle.inputData?.[`${keyPrefix}ei_status`],
            'solution': bundle.inputData?.[`${keyPrefix}solution`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
        }
    },
}
