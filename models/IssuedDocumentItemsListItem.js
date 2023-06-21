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
                label: `Issued document item id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}product_id`,
                label: `Issued document item product id - [${labelPrefix}product_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Issued document item product code - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Issued document item product name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `Issued document item product category - [${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `Issued document product description - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qty`,
                label: `Issued document item quantity - [${labelPrefix}qty]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}measure`,
                label: `Issued document item measure - [${labelPrefix}measure]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_price`,
                label: `Issued document item net price - [${labelPrefix}net_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}gross_price`,
                label: `Issued document item gross price - [${labelPrefix}gross_price]`,
                type: 'number',
            },
            ...VatType(`${keyPrefix}vat`, isInput),
            {
                key: `${keyPrefix}not_taxable`,
                label: `Issued document item is not taxable - [${labelPrefix}not_taxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}apply_withholding_taxes`,
                label: `Issued document item apply withholding taxes, rivalsa and cassa - [${labelPrefix}apply_withholding_taxes]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}discount`,
                label: `Issued document item discount percentual value - [${labelPrefix}discount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discount_highlight`,
                label: `Issued document item highlight discount - [${labelPrefix}discount_highlight]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}in_dn`,
                label: `Issued document item add in delivery note - [${labelPrefix}in_dn]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}stock`,
                label: `Issued document item move stock - [${labelPrefix}stock]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Issued document advanced raw attributes for e-invoices - [${labelPrefix}ei_raw]`,
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'product_id': bundle.inputData?.[`${keyPrefix}product_id`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'qty': bundle.inputData?.[`${keyPrefix}qty`],
            'measure': bundle.inputData?.[`${keyPrefix}measure`],
            'net_price': bundle.inputData?.[`${keyPrefix}net_price`],
            'gross_price': bundle.inputData?.[`${keyPrefix}gross_price`],
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, `${keyPrefix}vat`)),
            'not_taxable': bundle.inputData?.[`${keyPrefix}not_taxable`],
            'apply_withholding_taxes': bundle.inputData?.[`${keyPrefix}apply_withholding_taxes`],
            'discount': bundle.inputData?.[`${keyPrefix}discount`],
            'discount_highlight': bundle.inputData?.[`${keyPrefix}discount_highlight`],
            'in_dn': bundle.inputData?.[`${keyPrefix}in_dn`],
            'stock': bundle.inputData?.[`${keyPrefix}stock`],
            'ei_raw': bundle.inputData?.[`${keyPrefix}ei_raw`],
        }
    },
}
