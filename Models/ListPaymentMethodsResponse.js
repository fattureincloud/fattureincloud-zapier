const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentMethod = require('./PaymentMethod').fields;
const PaymentMethodMapping = require('./PaymentMethod').mapping;

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
                key: keyPrefix + 'data',
                
                children: PaymentMethod(keyPrefix + 'data'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'data']),
        }
    },
}
