const _ = require('lodash')
const utils = require('../utils/utils');
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...VatType(keyPrefix + 'vat'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, keyPrefix + 'vat')),
        }
    },
}
