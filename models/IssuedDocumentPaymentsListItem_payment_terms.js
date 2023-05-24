const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentTermsType = require('./PaymentTermsType').fields;

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
                key: keyPrefix + 'days',
                label: labelPrefix + 'The number of days by which the payment must be made.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'type',
                ...PaymentTermsType,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'days': bundle.inputData?.[keyPrefix + 'days'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
        }
    },
}
