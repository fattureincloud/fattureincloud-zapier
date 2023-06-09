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
                label: `Product id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Product name - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `Product code - [${keyPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}net_price`,
                label: `Product net price - [${keyPrefix}net_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}gross_price`,
                label: `Product gross price - [${keyPrefix}gross_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}use_gross_price`,
                label: `Product uses gross prices - [${keyPrefix}use_gross_price]`,
                type: 'boolean',
            },
            ...VatType(`${keyPrefix}default_vat`),
            {
                key: `${keyPrefix}net_cost`,
                label: `Product net cost - [${keyPrefix}net_cost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}measure`,
                label: `Product measure - [${keyPrefix}measure]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `Product description - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `Product category - [${keyPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Product extra notes - [${keyPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}in_stock`,
                label: `Product has stock - [${keyPrefix}in_stock]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}stock_initial`,
                label: `Product initial stock - [${keyPrefix}stock_initial]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}stock_current`,
                label: `[Read Only] Product current stock - [${keyPrefix}stock_current]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}average_cost`,
                label: `Product average cost - [${keyPrefix}average_cost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}average_price`,
                label: `Product average price - [${keyPrefix}average_price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `Product creation date - [${keyPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Product last update date - [${keyPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'net_price': bundle.inputData?.[`${keyPrefix}net_price`],
            'gross_price': bundle.inputData?.[`${keyPrefix}gross_price`],
            'use_gross_price': bundle.inputData?.[`${keyPrefix}use_gross_price`],
            'default_vat': utils.removeIfEmpty(VatTypeMapping(bundle, `${keyPrefix}default_vat`)),
            'net_cost': bundle.inputData?.[`${keyPrefix}net_cost`],
            'measure': bundle.inputData?.[`${keyPrefix}measure`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'in_stock': bundle.inputData?.[`${keyPrefix}in_stock`],
            'stock_initial': bundle.inputData?.[`${keyPrefix}stock_initial`],
            'stock_current': bundle.inputData?.[`${keyPrefix}stock_current`],
            'average_cost': bundle.inputData?.[`${keyPrefix}average_cost`],
            'average_price': bundle.inputData?.[`${keyPrefix}average_price`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
