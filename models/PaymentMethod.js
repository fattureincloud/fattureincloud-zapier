const utils = require('../utils/utils');
const PaymentAccount = require('../models/PaymentAccount');
const PaymentMethodDetails = require('../models/PaymentMethodDetails');
const PaymentMethodType = require('../models/PaymentMethodType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Payment method id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Payment method name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentMethodType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}is_default`,
                label: `Payment method is default - [${labelPrefix}is_default]`,
                type: 'boolean',
            },
            ...PaymentAccount.fields(`${keyPrefix}default_payment_account`, isInput),
            {
                key: `${keyPrefix}details`,
                label: `[${labelPrefix}details]`,
                children: PaymentMethodDetails.fields(`${keyPrefix}details${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `Payment method bank iban - [${labelPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_name`,
                label: `Payment method bank name - [${labelPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_beneficiary`,
                label: `Payment method bank beneficiary - [${labelPrefix}bank_beneficiary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_payment_method`,
                label: `E-invoice payment method - [${labelPrefix}ei_payment_method]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'is_default': bundle.inputData?.[`${keyPrefix}is_default`],
            'default_payment_account': utils.removeIfEmpty(PaymentAccount.mapping(bundle, `${keyPrefix}default_payment_account`)),
            'details': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}details`], `${keyPrefix}details`),
            'bank_iban': bundle.inputData?.[`${keyPrefix}bank_iban`],
            'bank_name': bundle.inputData?.[`${keyPrefix}bank_name`],
            'bank_beneficiary': bundle.inputData?.[`${keyPrefix}bank_beneficiary`],
            'ei_payment_method': bundle.inputData?.[`${keyPrefix}ei_payment_method`],
        }
    },
}
