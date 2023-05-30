const _ = require('lodash')
const utils = require('../utils/utils');
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Item unique identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `Item total net amount. - [${keyPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Item total gross amount. - [${keyPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}category`,
                label: `Item category. - [${keyPrefix}category]`,
                type: 'string',
            },
            ...VatType(`${keyPrefix}vat`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, `${keyPrefix}vat`)),
        }
    },
}
