const _ = require('lodash')
const utils = require('../utils/utils');
const Product = require('./Product').fields;
const ProductMapping = require('./Product').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}data`,
                label: `${keyPrefix}data]`,
                children: Product(`${keyPrefix}data`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}data`]),
        }
    },
}
