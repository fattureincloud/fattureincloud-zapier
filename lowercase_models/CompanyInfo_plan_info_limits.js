const _ = require('lodash')
const utils = require('../utils/utils');

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
                key: keyPrefix + 'clients',
                
                type: 'integer',
            },
            {
                key: keyPrefix + 'suppliers',
                
                type: 'integer',
            },
            {
                key: keyPrefix + 'products',
                
                type: 'integer',
            },
            {
                key: keyPrefix + 'documents',
                
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'clients': bundle.inputData?.[keyPrefix + 'clients'],
            'suppliers': bundle.inputData?.[keyPrefix + 'suppliers'],
            'products': bundle.inputData?.[keyPrefix + 'products'],
            'documents': bundle.inputData?.[keyPrefix + 'documents'],
        }
    },
}
