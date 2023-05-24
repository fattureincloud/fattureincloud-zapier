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
                label: labelPrefix + 'Unique identifier of the product.',
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
                key: keyPrefix + 'category',
                label: labelPrefix + 'Product category',
                type: 'string',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Product description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'qty',
                label: labelPrefix + 'Items quantity,',
                type: 'number',
            },
            {
                key: keyPrefix + 'measure',
                label: labelPrefix + 'Item measure.',
                type: 'string',
            },
            {
                key: keyPrefix + 'net_price',
                label: labelPrefix + 'Net price.',
                type: 'number',
            },
            {
                key: keyPrefix + 'gross_price',
                label: labelPrefix + 'Gross price.',
                type: 'number',
            },
            ...VatType(keyPrefix + 'vat'),
            {
                key: keyPrefix + 'not_taxable',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'apply_withholding_taxes',
                label: labelPrefix + 'Apply withholding taxes, rivalsa and cassa.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'discount',
                label: labelPrefix + 'Discount percentual value.',
                type: 'number',
            },
            {
                key: keyPrefix + 'discount_highlight',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'in_dn',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'stock',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ei_raw',
                label: labelPrefix + 'Advanced raw attributes for e-invoices.',
                dict: true,
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
            'category': bundle.inputData?.[keyPrefix + 'category'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
            'qty': bundle.inputData?.[keyPrefix + 'qty'],
            'measure': bundle.inputData?.[keyPrefix + 'measure'],
            'net_price': bundle.inputData?.[keyPrefix + 'net_price'],
            'gross_price': bundle.inputData?.[keyPrefix + 'gross_price'],
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, keyPrefix + 'vat')),
            'not_taxable': bundle.inputData?.[keyPrefix + 'not_taxable'],
            'apply_withholding_taxes': bundle.inputData?.[keyPrefix + 'apply_withholding_taxes'],
            'discount': bundle.inputData?.[keyPrefix + 'discount'],
            'discount_highlight': bundle.inputData?.[keyPrefix + 'discount_highlight'],
            'in_dn': bundle.inputData?.[keyPrefix + 'in_dn'],
            'stock': bundle.inputData?.[keyPrefix + 'stock'],
            'ei_raw': bundle.inputData?.[keyPrefix + 'ei_raw'],
        }
    },
}
