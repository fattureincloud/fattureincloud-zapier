const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocument = require('./IssuedDocument').fields;
const IssuedDocumentMapping = require('./IssuedDocument').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}current_page`,
                label: `Current page number. - [${keyPrefix}current_page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}first_page_url`,
                label: `First page url. - [${keyPrefix}first_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from`,
                label: `First result of the page. - [${keyPrefix}from]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}last_page`,
                label: `Last page number. - [${keyPrefix}last_page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}last_page_url`,
                label: `Last page url. - [${keyPrefix}last_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}next_page_url`,
                label: `Next page url - [${keyPrefix}next_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `Request path. - [${keyPrefix}path]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}per_page`,
                label: `Number of result per page. - [${keyPrefix}per_page]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}prev_page_url`,
                label: `Previous page url. - [${keyPrefix}prev_page_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}to`,
                label: `Last result of the page. - [${keyPrefix}to]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}total`,
                label: `Total number of results - [${keyPrefix}total]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}data`,
                label: `${keyPrefix}data]`,
                children: IssuedDocument(`${keyPrefix}data`), 
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
