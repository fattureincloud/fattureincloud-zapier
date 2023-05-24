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
                key: keyPrefix + 'current_page',
                label: labelPrefix + 'Current page number.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'first_page_url',
                label: labelPrefix + 'First page url.',
                type: 'string',
            },
            {
                key: keyPrefix + 'from',
                label: labelPrefix + 'First result of the page.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'last_page',
                label: labelPrefix + 'Last page number.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'last_page_url',
                label: labelPrefix + 'Last page url.',
                type: 'string',
            },
            {
                key: keyPrefix + 'next_page_url',
                label: labelPrefix + 'Next page url',
                type: 'string',
            },
            {
                key: keyPrefix + 'path',
                label: labelPrefix + 'Request path.',
                type: 'string',
            },
            {
                key: keyPrefix + 'per_page',
                label: labelPrefix + 'Number of result per page.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'prev_page_url',
                label: labelPrefix + 'Previous page url.',
                type: 'string',
            },
            {
                key: keyPrefix + 'to',
                label: labelPrefix + 'Last result of the page.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'total',
                label: labelPrefix + 'Total number of results',
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'current_page': bundle.inputData?.[keyPrefix + 'current_page'],
            'first_page_url': bundle.inputData?.[keyPrefix + 'first_page_url'],
            'from': bundle.inputData?.[keyPrefix + 'from'],
            'last_page': bundle.inputData?.[keyPrefix + 'last_page'],
            'last_page_url': bundle.inputData?.[keyPrefix + 'last_page_url'],
            'next_page_url': bundle.inputData?.[keyPrefix + 'next_page_url'],
            'path': bundle.inputData?.[keyPrefix + 'path'],
            'per_page': bundle.inputData?.[keyPrefix + 'per_page'],
            'prev_page_url': bundle.inputData?.[keyPrefix + 'prev_page_url'],
            'to': bundle.inputData?.[keyPrefix + 'to'],
            'total': bundle.inputData?.[keyPrefix + 'total'],
        }
    },
}
