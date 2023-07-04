const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyType = require('../models/CompanyType');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Controlled company id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Controlled company id - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...CompanyType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}access_token`,
                label: `Controlled company access token Only if type=company] - [${labelPrefix}access_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}connection_id`,
                label: `Controlled company connection id - [${labelPrefix}connection_id]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Controlled company tax code - [${labelPrefix}tax_code]`,
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
            'access_token': bundle.inputData?.[`${keyPrefix}access_token`],
            'connection_id': bundle.inputData?.[`${keyPrefix}connection_id`],
            'tax_code': bundle.inputData?.[`${keyPrefix}tax_code`],
        }
    },
}
