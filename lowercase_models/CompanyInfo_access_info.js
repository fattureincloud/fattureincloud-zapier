const _ = require('lodash')
const utils = require('../utils/utils');
const UserCompanyRole = require('./UserCompanyRole').fields;
const Permissions = require('./Permissions').fields;
const PermissionsMapping = require('./Permissions').mapping;

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
                key: keyPrefix + 'role',
                ...UserCompanyRole,
            },
            ...Permissions(keyPrefix + 'permissions'),
            {
                key: keyPrefix + 'through_accountant',
                
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'role': bundle.inputData?.[keyPrefix + 'role'],
            'permissions': utils.removeIfEmpty(PermissionsMapping(bundle, keyPrefix + 'permissions')),
            'through_accountant': bundle.inputData?.[keyPrefix + 'through_accountant'],
        }
    },
}
