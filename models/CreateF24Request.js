const _ = require('lodash')
const utils = require('../utils/utils');
const F24 = require('./F24').fields;
const F24Mapping = require('./F24').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...F24(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(F24Mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
