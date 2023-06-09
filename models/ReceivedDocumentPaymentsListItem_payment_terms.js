const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentTermsType = require('./PaymentTermsType').fields;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}days`,
                label: `Received document payment number of days by which the payment must be made - [${keyPrefix}days]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentTermsType(`${keyPrefix}type`),
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
