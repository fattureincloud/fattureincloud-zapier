const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentAccountType = require('./PaymentAccountType').fields;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Unique identifier - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Payment account name. - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentAccountType(`${keyPrefix}type`),
            },
            {
                key: `${keyPrefix}iban`,
                label: `Payment account iban. - [${keyPrefix}iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sia`,
                label: `Payment account sia. - [${keyPrefix}sia]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cuc`,
                label: `Payment account cuc. - [${keyPrefix}cuc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}virtual`,
                label: `Determine if the payment method is virtual. - [${keyPrefix}virtual]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'iban': bundle.inputData?.[`${keyPrefix}iban`],
            'sia': bundle.inputData?.[`${keyPrefix}sia`],
            'cuc': bundle.inputData?.[`${keyPrefix}cuc`],
            'virtual': bundle.inputData?.[`${keyPrefix}virtual`],
        }
    },
}
