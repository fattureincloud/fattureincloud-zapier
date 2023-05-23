const _ = require('lodash')
const utils = require('../utils/utils');
const Company = require('./Company').fields;
const CompanyMapping = require('./Company').mapping;

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
                key: keyPrefix + 'companies',
                
                children: Company(keyPrefix + 'companies'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'companies': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'companies']),
        }
    },
}
