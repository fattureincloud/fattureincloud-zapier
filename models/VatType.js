const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Vat type id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}value`,
                label: `[Read Only] Vat type percentual value - [${keyPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}description`,
                label: `Vat type short description - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Vat type notes shown in documents - [${keyPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Vat type is usable for e-invoices - [${keyPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_type`,
                label: `Vat type e-invoice type (natura) - [${keyPrefix}ei_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_description`,
                label: `Vat type e-invoice description - [${keyPrefix}ei_description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}editable`,
                label: `[Read Only] Is the vat type is editable. - [${keyPrefix}editable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_disabled`,
                label: `Is the vat type disabled - [${keyPrefix}is_disabled]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'e_invoice': bundle.inputData?.[`${keyPrefix}e_invoice`],
            'ei_type': bundle.inputData?.[`${keyPrefix}ei_type`],
            'ei_description': bundle.inputData?.[`${keyPrefix}ei_description`],
            'editable': bundle.inputData?.[`${keyPrefix}editable`],
            'is_disabled': bundle.inputData?.[`${keyPrefix}is_disabled`],
        }
    },
}
