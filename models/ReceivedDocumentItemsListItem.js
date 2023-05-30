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
                label: `Unique identifier of the product - [${keyPrefix}product_id]`,
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
                key: `${keyPrefix}measure`,
                label: `Product measure. - [${keyPrefix}measure]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_price`,
                label: `Product net price. - [${keyPrefix}net_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}category`,
                label: `Product category. - [${keyPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qty`,
                label: `Product quantity. - [${keyPrefix}qty]`,
                type: 'number',
            },
            ...VatType(`${keyPrefix}vat`),
            {
                key: `${keyPrefix}stock`,
                label: `Number of items in stock - [${keyPrefix}stock]`,
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
