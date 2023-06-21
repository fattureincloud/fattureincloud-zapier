const _ = require('lodash')
const utils = require('../utils/utils');
const Supplier = require('./Supplier').fields;
const SupplierMapping = require('./Supplier').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...Supplier(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(SupplierMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
