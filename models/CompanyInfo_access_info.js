const _ = require('lodash')
const utils = require('../utils/utils');
const UserCompanyRole = require('./UserCompanyRole').fields;
const Permissions = require('./Permissions').fields;
const PermissionsMapping = require('./Permissions').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}role`,
                ...UserCompanyRole(`${keyPrefix}role`, isInput),
            },
            ...Permissions(`${keyPrefix}permissions`, isInput),
            {
                key: `${keyPrefix}through_accountant`,
                label: `Company activated through accountant - [${labelPrefix}through_accountant]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'permissions': utils.removeIfEmpty(PermissionsMapping(bundle, `${keyPrefix}permissions`)),
            'through_accountant': bundle.inputData?.[`${keyPrefix}through_accountant`],
        }
    },
}
