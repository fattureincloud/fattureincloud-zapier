const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `User identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Full name of the user. - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}first_name`,
                label: `First name of the user. - [${keyPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `Last name of the user. - [${keyPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Email of the user. - [${keyPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hash`,
                label: `[${keyPrefix}hash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}picture`,
                label: `Picture of the user. - [${keyPrefix}picture]`,
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
