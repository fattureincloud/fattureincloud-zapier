const _ = require('lodash')
const utils = require('../utils/utils');
const Supplier = require('./Supplier').fields;
const SupplierMapping = require('./Supplier').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...Supplier(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(SupplierMapping(bundle, keyPrefix + 'data')),
        }
    },
}
