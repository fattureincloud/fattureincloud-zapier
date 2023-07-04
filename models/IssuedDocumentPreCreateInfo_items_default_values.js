const _ = require('lodash')
const utils = require('../utils/utils');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...VatType.fields(`${keyPrefix}vat`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'vat': utils.removeIfEmpty(VatType.mapping(bundle, `${keyPrefix}vat`)),
        }
    },
}
