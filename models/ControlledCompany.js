const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyType = require('./CompanyType').fields;

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
                label: labelPrefix + 'Company unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Company name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'type',
                ...CompanyType,
            },
            {
                key: keyPrefix + 'access_token',
                label: labelPrefix + 'CompanyAuthentication token for this company. [Only if type&#x3D;company]',
                type: 'string',
            },
            {
                key: keyPrefix + 'connection_id',
                label: labelPrefix + 'Company connection id.',
                type: 'number',
            },
            {
                key: keyPrefix + 'tax_code',
                label: labelPrefix + 'Tax code.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'access_token': bundle.inputData?.[keyPrefix + 'access_token'],
            'connection_id': bundle.inputData?.[keyPrefix + 'connection_id'],
            'tax_code': bundle.inputData?.[keyPrefix + 'tax_code'],
        }
    },
}
