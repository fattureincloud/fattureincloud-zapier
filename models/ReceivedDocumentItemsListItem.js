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
                label: `Received document item id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}product_id`,
                label: `Received document product id - [${keyPrefix}product_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Received document item product code - [${keyPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Received document item product name - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}measure`,
                label: `Received document item measure - [${keyPrefix}measure]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_price`,
                label: `Received document item product net price - [${keyPrefix}net_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}category`,
                label: `Received document item product category - [${keyPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qty`,
                label: `Received document item quantity - [${keyPrefix}qty]`,
                type: 'number',
            },
            ...VatType(`${keyPrefix}vat`),
            {
                key: `${keyPrefix}stock`,
                label: `Received document item product number of items in stock - [${keyPrefix}stock]`,
                type: 'number',
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
            'measure': bundle.inputData?.[`${keyPrefix}measure`],
            'net_price': bundle.inputData?.[`${keyPrefix}net_price`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'qty': bundle.inputData?.[`${keyPrefix}qty`],
            'vat': utils.removeIfEmpty(VatTypeMapping(bundle, `${keyPrefix}vat`)),
            'stock': bundle.inputData?.[`${keyPrefix}stock`],
        }
    },
}
