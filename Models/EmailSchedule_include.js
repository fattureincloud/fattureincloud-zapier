const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'document',
                label: labelPrefix + 'If set to true, the email will have a button to view the document',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'delivery_note',
                label: labelPrefix + 'If set to true, the email will have a button to view the delivery note',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'attachment',
                label: labelPrefix + 'If set to true, the email will have a button to view the attachment',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'accompanying_invoice',
                label: labelPrefix + 'If set to true, the email will have a button to view the accompanying invoice',
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'document': bundle.inputData?.[keyPrefix + 'document'],
            'delivery_note': bundle.inputData?.[keyPrefix + 'delivery_note'],
            'attachment': bundle.inputData?.[keyPrefix + 'attachment'],
            'accompanying_invoice': bundle.inputData?.[keyPrefix + 'accompanying_invoice'],
        }
    },
}
