const utils = require('../utils/utils');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Received document item id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}product_id`,
                label: `Received document product id - [${labelPrefix}product_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Received document item product code - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Received document item product name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}measure`,
                label: `Received document item measure - [${labelPrefix}measure]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_price`,
                label: `Received document item product net price - [${labelPrefix}net_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}category`,
                label: `Received document item product category - [${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qty`,
                label: `Received document item quantity - [${labelPrefix}qty]`,
                type: 'number',
            },
            ...VatType.fields(`${keyPrefix}vat`, isInput),
            {
                key: `${keyPrefix}stock`,
                label: `Received document item product number of items in stock - [${labelPrefix}stock]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'product_id': bundle.inputData?.[`${keyPrefix}product_id`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'measure': bundle.inputData?.[`${keyPrefix}measure`],
            'net_price': bundle.inputData?.[`${keyPrefix}net_price`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'qty': bundle.inputData?.[`${keyPrefix}qty`],
            'vat': utils.removeIfEmpty(VatType.mapping(bundle, `${keyPrefix}vat`)),
            'stock': bundle.inputData?.[`${keyPrefix}stock`],
        }
    },
}
