const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyType = require('./CompanyType').fields;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Company unique identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Company name. - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...CompanyType(`${keyPrefix}type`),
            },
            {
                key: `${keyPrefix}access_token`,
                label: `CompanyAuthentication token for this company. [Only if type&#x3D;company] - [${keyPrefix}access_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}connection_id`,
                label: `Company connection id. - [${keyPrefix}connection_id]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Tax code. - [${keyPrefix}tax_code]`,
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
