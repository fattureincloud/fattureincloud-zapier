const _ = require('lodash')
const utils = require('../utils/utils');
const EmailSchedule_include = require('./EmailSchedule_include').fields;
const EmailSchedule_includeMapping = require('./EmailSchedule_include').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}sender_id`,
                label: `Email sender id [required if **sender_email** is not specified] - [${keyPrefix}sender_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}sender_email`,
                label: `Email sender address [required if **sender_id** is not specified] - [${keyPrefix}sender_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipient_email`,
                label: `Email recipient emails [comma separated] - [${keyPrefix}recipient_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `Email subject - [${keyPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}body`,
                label: `Email body [HTML Escaped] [max size 50KiB] - [${keyPrefix}body]`,
                type: 'string',
            },
            ...EmailSchedule_include(`${keyPrefix}include`),
            {
                key: `${keyPrefix}attach_pdf`,
                label: `Attach the pdf of the document - [${keyPrefix}attach_pdf]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}send_copy`,
                label: `Send a copy of the email to the **cc_email** specified by **Get email data** - [${keyPrefix}send_copy]`,
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
            'include': utils.removeIfEmpty(EmailSchedule_includeMapping(bundle, `${keyPrefix}include`)),
            'attach_pdf': bundle.inputData?.[`${keyPrefix}attach_pdf`],
            'send_copy': bundle.inputData?.[`${keyPrefix}send_copy`],
        }
    },
}
