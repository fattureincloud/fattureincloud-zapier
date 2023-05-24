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
                key: keyPrefix + 'name',
                label: labelPrefix + 'Product name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'code',
                label: labelPrefix + 'Product code.',
                type: 'string',
            },
            {
                key: keyPrefix + 'net_price',
                label: labelPrefix + 'Net sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically).',
                type: 'number',
            },
            {
                key: keyPrefix + 'gross_price',
                label: labelPrefix + 'Gross sale price (used if use_gross_price is false, otherwise it&#39;s competed automatically).',
                type: 'number',
            },
            {
                key: keyPrefix + 'use_gross_price',
                label: labelPrefix + 'Determine which price to use for calculations.',
                type: 'boolean',
            },
            ...VatType(keyPrefix + 'default_vat'),
            {
                key: keyPrefix + 'net_cost',
                label: labelPrefix + 'Net cost of the product (used for received documents).',
                type: 'number',
            },
            {
                key: keyPrefix + 'measure',
                label: labelPrefix + 'Unit of measure.',
                type: 'string',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Product description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'category',
                label: labelPrefix + 'Product category.',
                type: 'string',
            },
            {
                key: keyPrefix + 'notes',
                label: labelPrefix + 'Extra notes.',
                type: 'string',
            },
            {
                key: keyPrefix + 'in_stock',
                label: labelPrefix + 'Determine if the product is in stock.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'stock_initial',
                label: labelPrefix + 'Product initial stock.',
                type: 'number',
            },
            {
                key: keyPrefix + 'stock_current',
                label: labelPrefix + '[Read Only] Product current stock.',
                type: 'number',
            },
            {
                key: keyPrefix + 'average_cost',
                label: labelPrefix + 'Product average cost.',
                type: 'number',
            },
            {
                key: keyPrefix + 'average_price',
                label: labelPrefix + 'Product average price.',
                type: 'number',
            },
            {
                key: keyPrefix + 'created_at',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'updated_at',
                
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'name': bundle.inputData?.[keyPrefix + 'name'],
            'code': bundle.inputData?.[keyPrefix + 'code'],
            'net_price': bundle.inputData?.[keyPrefix + 'net_price'],
            'gross_price': bundle.inputData?.[keyPrefix + 'gross_price'],
            'use_gross_price': bundle.inputData?.[keyPrefix + 'use_gross_price'],
            'default_vat': utils.removeIfEmpty(VatTypeMapping(bundle, keyPrefix + 'default_vat')),
            'net_cost': bundle.inputData?.[keyPrefix + 'net_cost'],
            'measure': bundle.inputData?.[keyPrefix + 'measure'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
            'category': bundle.inputData?.[keyPrefix + 'category'],
            'notes': bundle.inputData?.[keyPrefix + 'notes'],
            'in_stock': bundle.inputData?.[keyPrefix + 'in_stock'],
            'stock_initial': bundle.inputData?.[keyPrefix + 'stock_initial'],
            'stock_current': bundle.inputData?.[keyPrefix + 'stock_current'],
            'average_cost': bundle.inputData?.[keyPrefix + 'average_cost'],
            'average_price': bundle.inputData?.[keyPrefix + 'average_price'],
            'created_at': bundle.inputData?.[keyPrefix + 'created_at'],
            'updated_at': bundle.inputData?.[keyPrefix + 'updated_at'],
        }
    },
}
