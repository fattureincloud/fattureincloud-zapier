const _ = require('lodash')
const utils = require('../utils/utils');
const EmailSchedule_include = require('../models/EmailSchedule_include');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}sender_id`,
                label: `Email sender id [required if **sender_email** is not specified] - [${labelPrefix}sender_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}sender_email`,
                label: `Email sender address [required if **sender_id** is not specified] - [${labelPrefix}sender_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipient_email`,
                label: `Email recipient emails [comma separated] - [${labelPrefix}recipient_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `Email subject - [${labelPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}body`,
                label: `Email body [HTML Escaped] [max size 50KiB] - [${labelPrefix}body]`,
                type: 'string',
            },
            ...EmailSchedule_include.fields(`${keyPrefix}include`, isInput),
            {
                key: `${keyPrefix}attach_pdf`,
                label: `Attach the pdf of the document - [${labelPrefix}attach_pdf]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}send_copy`,
                label: `Send a copy of the email to the **cc_email** specified by **Get email data** - [${labelPrefix}send_copy]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'sender_id': bundle.inputData?.[`${keyPrefix}sender_id`],
            'sender_email': bundle.inputData?.[`${keyPrefix}sender_email`],
            'recipient_email': bundle.inputData?.[`${keyPrefix}recipient_email`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'include': utils.removeIfEmpty(EmailSchedule_include.mapping(bundle, `${keyPrefix}include`)),
            'attach_pdf': bundle.inputData?.[`${keyPrefix}attach_pdf`],
            'send_copy': bundle.inputData?.[`${keyPrefix}send_copy`],
        }
    },
}
