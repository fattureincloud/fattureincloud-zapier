const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentMethodType = require('./PaymentMethodType').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;
const PaymentMethodDetails = require('./PaymentMethodDetails').fields;
const PaymentMethodDetailsMapping = require('./PaymentMethodDetails').mapping;

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
                label: `Name of the payment method - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentMethodType(`${keyPrefix}type`),
            },
            {
                key: `${keyPrefix}is_default`,
                label: `Determines if this is the default payment method. - [${keyPrefix}is_default]`,
                type: 'boolean',
            },
            ...PaymentAccount(`${keyPrefix}default_payment_account`),
            {
                key: `${keyPrefix}details`,
                label: `${keyPrefix}details]`,
                children: PaymentMethodDetails(`${keyPrefix}details`), 
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `Bank iban - [${keyPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_name`,
                label: `Bank name - [${keyPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_beneficiary`,
                label: `Bank beneficiary - [${keyPrefix}bank_beneficiary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_payment_method`,
                label: `E-invoice payment method - [${keyPrefix}ei_payment_method]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'is_default': bundle.inputData?.[`${keyPrefix}is_default`],
            'default_payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, `${keyPrefix}default_payment_account`)),
            'details': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}details`]),
            'bank_iban': bundle.inputData?.[`${keyPrefix}bank_iban`],
            'bank_name': bundle.inputData?.[`${keyPrefix}bank_name`],
            'bank_beneficiary': bundle.inputData?.[`${keyPrefix}bank_beneficiary`],
            'ei_payment_method': bundle.inputData?.[`${keyPrefix}ei_payment_method`],
        }
    },
}
