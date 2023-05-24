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
            {
                key: keyPrefix + 'id',
                label: labelPrefix + 'Item unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'amount_net',
                label: labelPrefix + 'Item total net amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_gross',
                label: labelPrefix + 'Item total gross amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'category',
                label: labelPrefix + 'Item category.',
                type: 'string',
            },
            ...VatType(keyPrefix + 'vat'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'amount_net': bundle.inputData?.[keyPrefix + 'amount_net'],
            'amount_gross': bundle.inputData?.[keyPrefix + 'amount_gross'],
            'category': bundle.inputData?.[keyPrefix + 'category'],
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, keyPrefix + 'vat')),
        }
    },
}
