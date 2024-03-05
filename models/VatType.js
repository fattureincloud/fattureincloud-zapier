const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                dynamic: 'listVatTypesTrigger.id.name',
                label: `Vat type id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}value`,
                label: `[Read Only] Vat type percentual value - [${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}description`,
                label: `Vat type short description - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Vat type notes shown in documents - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Vat type is usable for e-invoices - [${labelPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ei_type`,
                label: `Vat type e-invoice type (natura) - [${labelPrefix}ei_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_description`,
                label: `Vat type e-invoice description - [${labelPrefix}ei_description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}editable`,
                label: `[Read Only] Is the vat type is editable. - [${labelPrefix}editable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_disabled`,
                label: `Is the vat type disabled - [${labelPrefix}is_disabled]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
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
