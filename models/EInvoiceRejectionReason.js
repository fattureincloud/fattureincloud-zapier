const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}reason`,
                label: `Rejection reason. - [${keyPrefix}reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_status`,
                label: `E-invoice status. - [${keyPrefix}ei_status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}solution`,
                label: `Error solution. - [${keyPrefix}solution]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `Error code. - [${keyPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `Rejection date. - [${keyPrefix}date]`,
                type: 'datetime',
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
