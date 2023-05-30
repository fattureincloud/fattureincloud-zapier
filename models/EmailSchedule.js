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
                label: `Sender id. Required if &#x60;sender_email&#x60; is not specified - [${keyPrefix}sender_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}sender_email`,
                label: `Sender email. Required if &#x60;sender_id&#x60; is not specified - [${keyPrefix}sender_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipient_email`,
                label: `One or more comma separated recipient emails - [${keyPrefix}recipient_email]`,
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
                label: `If set to true, documents will be sent as PDF attachments too - [${keyPrefix}attach_pdf]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}send_copy`,
                label: `If set to true, a copy of the email will be sent to the &#x60;cc_email&#x60; specified by &#x60;Get email data&#x60; - [${keyPrefix}send_copy]`,
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
