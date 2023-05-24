const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccountType = require('./PaymentAccountType').fields;

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
                key: keyPrefix + 'id',
                label: labelPrefix + 'Unique identifier',
                type: 'integer',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Payment account name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'type',
                ...PaymentAccountType,
            },
            {
                key: keyPrefix + 'iban',
                label: labelPrefix + 'Payment account iban.',
                type: 'string',
            },
            {
                key: keyPrefix + 'sia',
                label: labelPrefix + 'Payment account sia.',
                type: 'string',
            },
            {
                key: keyPrefix + 'cuc',
                label: labelPrefix + 'Payment account cuc.',
                type: 'string',
            },
            {
                key: keyPrefix + 'virtual',
                label: labelPrefix + 'Determine if the payment method is virtual.',
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'iban': bundle.inputData?.[keyPrefix + 'iban'],
            'sia': bundle.inputData?.[keyPrefix + 'sia'],
            'cuc': bundle.inputData?.[keyPrefix + 'cuc'],
            'virtual': bundle.inputData?.[keyPrefix + 'virtual'],
        }
    },
}
