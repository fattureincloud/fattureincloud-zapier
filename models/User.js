const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `User id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `User full name - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}first_name`,
                label: `User first name - [${keyPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `User last name - [${keyPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `User email address - [${keyPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hash`,
                label: `User hash - [${keyPrefix}hash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}picture`,
                label: `User picture - [${keyPrefix}picture]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
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
