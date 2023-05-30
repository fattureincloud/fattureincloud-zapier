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
                label: `Unique identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}product_id`,
                label: `Unique identifier of the product. - [${keyPrefix}product_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Product code. - [${keyPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Product name. - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `Product category - [${keyPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `Product description. - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qty`,
                label: `Items quantity, - [${keyPrefix}qty]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}measure`,
                label: `Item measure. - [${keyPrefix}measure]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_price`,
                label: `Net price. - [${keyPrefix}net_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}gross_price`,
                label: `Gross price. - [${keyPrefix}gross_price]`,
                type: 'number',
            },
            ...VatType(`${keyPrefix}vat`),
            {
                key: `${keyPrefix}not_taxable`,
                label: `[${keyPrefix}not_taxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}apply_withholding_taxes`,
                label: `Apply withholding taxes, rivalsa and cassa. - [${keyPrefix}apply_withholding_taxes]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}discount`,
                label: `Discount percentual value. - [${keyPrefix}discount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discount_highlight`,
                label: `[${keyPrefix}discount_highlight]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}in_dn`,
                label: `[${keyPrefix}in_dn]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}stock`,
                label: `[${keyPrefix}stock]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Advanced raw attributes for e-invoices. - [${keyPrefix}ei_raw]`,
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
