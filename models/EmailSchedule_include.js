const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}document`,
                label: `Include a button to view the document - [${labelPrefix}document]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}delivery_note`,
                label: `Include a button to view the delivery note - [${labelPrefix}delivery_note]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}attachment`,
                label: `Include a button to view the attachment - [${labelPrefix}attachment]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accompanying_invoice`,
                label: `Include a button to view the accompanying invoice - [${labelPrefix}accompanying_invoice]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'document': bundle.inputData?.[`${keyPrefix}document`],
            'delivery_note': bundle.inputData?.[`${keyPrefix}delivery_note`],
            'attachment': bundle.inputData?.[`${keyPrefix}attachment`],
            'accompanying_invoice': bundle.inputData?.[`${keyPrefix}accompanying_invoice`],
        }
    },
}
