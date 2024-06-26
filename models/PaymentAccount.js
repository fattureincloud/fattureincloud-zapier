const utils = require('../utils/utils');
const PaymentAccountType = require('../models/PaymentAccountType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Payment account id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Payment account name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentAccountType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}iban`,
                label: `Payment account iban - [${labelPrefix}iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sia`,
                label: `Payment account sia - [${labelPrefix}sia]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cuc`,
                label: `Payment account cuc - [${labelPrefix}cuc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}virtual`,
                label: `Payment method is virtual - [${labelPrefix}virtual]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
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
