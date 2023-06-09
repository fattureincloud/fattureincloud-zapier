const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}document`,
                label: `Include a button to view the document - [${keyPrefix}document]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}delivery_note`,
                label: `Include a button to view the delivery note - [${keyPrefix}delivery_note]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}attachment`,
                label: `Include a button to view the attachment - [${keyPrefix}attachment]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accompanying_invoice`,
                label: `Include a button to view the accompanying invoice - [${keyPrefix}accompanying_invoice]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'document': bundle.inputData?.[`${keyPrefix}document`],
            'delivery_note': bundle.inputData?.[`${keyPrefix}delivery_note`],
            'attachment': bundle.inputData?.[`${keyPrefix}attachment`],
            'accompanying_invoice': bundle.inputData?.[`${keyPrefix}accompanying_invoice`],
        }
    },
}
