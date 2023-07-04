const _ = require('lodash')
const utils = require('../utils/utils');
const Company = require('../models/Company');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}companies`,
                label: `[${labelPrefix}companies]`,
                children: Company.fields(`${keyPrefix}companies${!isInput && '[]'}`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'companies': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}companies`]),
        }
    },
}
