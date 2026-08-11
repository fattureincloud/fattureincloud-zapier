const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `User id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `User full name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}first_name`,
                label: `User first name - [${labelPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `User last name - [${labelPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `User email address - [${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hash`,
                label: `User hash - [${labelPrefix}hash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}picture`,
                label: `User picture - [${labelPrefix}picture]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'hash': bundle.inputData?.[`${keyPrefix}hash`],
            'picture': bundle.inputData?.[`${keyPrefix}picture`],
        }
    },
}
