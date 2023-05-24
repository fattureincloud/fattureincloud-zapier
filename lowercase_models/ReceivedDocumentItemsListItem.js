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
                label: labelPrefix + 'Unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'product_id',
                label: labelPrefix + 'Unique identifier of the product',
                type: 'integer',
            },
            {
                key: keyPrefix + 'code',
                label: labelPrefix + 'Product code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'name',
                label: labelPrefix + 'Product name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'measure',
                label: labelPrefix + 'Product measure.',
                type: 'string',
            },
            {
                key: keyPrefix + 'net_price',
                label: labelPrefix + 'Product net price.',
                type: 'number',
            },
            {
                key: keyPrefix + 'category',
                label: labelPrefix + 'Product category.',
                type: 'string',
            },
            {
                key: keyPrefix + 'qty',
                label: labelPrefix + 'Product quantity.',
                type: 'number',
            },
            ...VatType(keyPrefix + 'vat'),
            {
                key: keyPrefix + 'stock',
                label: labelPrefix + 'Number of items in stock',
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'product_id': bundle.inputData?.[keyPrefix + 'product_id'],
            'code': bundle.inputData?.[keyPrefix + 'code'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'measure': bundle.inputData?.[keyPrefix + 'measure'],
            'net_price': bundle.inputData?.[keyPrefix + 'net_price'],
            'category': bundle.inputData?.[keyPrefix + 'category'],
            'qty': bundle.inputData?.[keyPrefix + 'qty'],
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, keyPrefix + 'vat')),
            'stock': bundle.inputData?.[keyPrefix + 'stock'],
        }
    },
}
