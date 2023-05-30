const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Unique identifier - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}value`,
                label: `[Read Only] Percentual value. - [${keyPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}description`,
                label: `Short description. - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Long description and notes shown in documents. - [${keyPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Usable for e-invoices. - [${keyPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_type`,
                label: `E-invoice type (natura). - [${keyPrefix}ei_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_description`,
                label: `E-invoice description. - [${keyPrefix}ei_description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}editable`,
                label: `[Read Only] Determine if this vat type is editable. - [${keyPrefix}editable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_disabled`,
                label: `Determine if the vat type is disabled. - [${keyPrefix}is_disabled]`,
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
