const _ = require('lodash')
const utils = require('../utils/utils');
const Product = require('./Product').fields;
const ProductMapping = require('./Product').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...Product(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ProductMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
