const _ = require('lodash')
const utils = require('../utils/utils');

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
                label: labelPrefix + 'User identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Full name of the user.',
                type: 'string',
            },
            {
                key: keyPrefix + 'first_name',
                label: labelPrefix + 'First name of the user.',
                type: 'string',
            },
            {
                key: keyPrefix + 'last_name',
                label: labelPrefix + 'Last name of the user.',
                type: 'string',
            },
            {
                key: keyPrefix + 'email',
                label: labelPrefix + 'Email of the user.',
                type: 'string',
            },
            {
                key: keyPrefix + 'hash',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'picture',
                label: labelPrefix + 'Picture of the user.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'first_name': bundle.inputData?.[keyPrefix + 'first_name'],
            'last_name': bundle.inputData?.[keyPrefix + 'last_name'],
            'email': bundle.inputData?.[keyPrefix + 'email'],
            'hash': bundle.inputData?.[keyPrefix + 'hash'],
            'picture': bundle.inputData?.[keyPrefix + 'picture'],
        }
    },
}
