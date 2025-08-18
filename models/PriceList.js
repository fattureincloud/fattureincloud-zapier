const utils = require('../utils/utils');
const PriceListPricesType = require('../models/PriceListPricesType');
const PriceListType = require('../models/PriceListType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Price list id - [${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Price list name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}prices_type`,
                ...PriceListPricesType.fields(`${keyPrefix}prices_type`, isInput),
            },
            {
                key: `${keyPrefix}is_default`,
                label: `This entity is default - [${labelPrefix}is_default]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}valid_from`,
                label: `Price list validity start date - [${labelPrefix}valid_from]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}valid_to`,
                label: `Price list validity end date - [${labelPrefix}valid_to]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...PriceListType.fields(`${keyPrefix}type`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'prices_type': bundle.inputData?.[`${keyPrefix}prices_type`],
            'is_default': bundle.inputData?.[`${keyPrefix}is_default`],
            'valid_from': bundle.inputData?.[`${keyPrefix}valid_from`],
            'valid_to': bundle.inputData?.[`${keyPrefix}valid_to`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
