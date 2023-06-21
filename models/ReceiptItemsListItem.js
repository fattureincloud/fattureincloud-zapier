const _ = require('lodash')
const utils = require('../utils/utils');
const VatType = require('./VatType').fields;
const VatTypeMapping = require('./VatType').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Receipt item id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `Receipt item total net amount - [${labelPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `Receipt item total gross amount - [${labelPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}category`,
                label: `Receipt item category - [${labelPrefix}category]`,
                type: 'string',
            },
            ...VatType(`${keyPrefix}vat`, isInput),
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
