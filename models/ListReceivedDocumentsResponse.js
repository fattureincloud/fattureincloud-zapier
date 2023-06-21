const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocument = require('./ReceivedDocument').fields;
const ReceivedDocumentMapping = require('./ReceivedDocument').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}current_page`,
                label: `Current page number. - [${labelPrefix}current_page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}first_page_url`,
                label: `First page url. - [${labelPrefix}first_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from`,
                label: `First result of the page. - [${labelPrefix}from]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}last_page`,
                label: `Last page number. - [${labelPrefix}last_page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}last_page_url`,
                label: `Last page url. - [${labelPrefix}last_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}next_page_url`,
                label: `Next page url - [${labelPrefix}next_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `Request path. - [${labelPrefix}path]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}per_page`,
                label: `Number of result per page. - [${labelPrefix}per_page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}prev_page_url`,
                label: `Previous page url. - [${labelPrefix}prev_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}to`,
                label: `Last result of the page. - [${labelPrefix}to]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}total`,
                label: `Total number of results - [${labelPrefix}total]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}data`,
                label: `${labelPrefix}data]`,
                children: ReceivedDocument(`${keyPrefix}data${!isInput && '[]'}`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'current_page': bundle.inputData?.[`${keyPrefix}current_page`],
            'first_page_url': bundle.inputData?.[`${keyPrefix}first_page_url`],
            'from': bundle.inputData?.[`${keyPrefix}from`],
            'last_page': bundle.inputData?.[`${keyPrefix}last_page`],
            'last_page_url': bundle.inputData?.[`${keyPrefix}last_page_url`],
            'next_page_url': bundle.inputData?.[`${keyPrefix}next_page_url`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
            'per_page': bundle.inputData?.[`${keyPrefix}per_page`],
            'prev_page_url': bundle.inputData?.[`${keyPrefix}prev_page_url`],
            'to': bundle.inputData?.[`${keyPrefix}to`],
            'total': bundle.inputData?.[`${keyPrefix}total`],
            'data': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}data`]),
        }
    },
}
