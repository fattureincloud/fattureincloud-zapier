const _ = require('lodash')
const utils = require('../utils/utils');
const EmailSchedule_include = require('./EmailSchedule_include').fields;
const EmailSchedule_includeMapping = require('./EmailSchedule_include').mapping;

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
                key: keyPrefix + 'sender_id',
                label: labelPrefix + 'Sender id. Required if &#x60;sender_email&#x60; is not specified',
                type: 'integer',
            },
            {
                key: keyPrefix + 'sender_email',
                label: labelPrefix + 'Sender email. Required if &#x60;sender_id&#x60; is not specified',
                type: 'string',
            },
            {
                key: keyPrefix + 'recipient_email',
                label: labelPrefix + 'One or more comma separated recipient emails',
                type: 'string',
            },
            {
                key: keyPrefix + 'subject',
                label: labelPrefix + 'Email subject',
                type: 'string',
            },
            {
                key: keyPrefix + 'body',
                label: labelPrefix + 'Email body [HTML Escaped] [max size 50KiB]',
                type: 'string',
            },
            ...EmailSchedule_include(keyPrefix + 'include'),
            {
                key: keyPrefix + 'attach_pdf',
                label: labelPrefix + 'If set to true, documents will be sent as PDF attachments too',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'send_copy',
                label: labelPrefix + 'If set to true, a copy of the email will be sent to the &#x60;cc_email&#x60; specified by &#x60;Get email data&#x60;',
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'sender_id': bundle.inputData?.[keyPrefix + 'sender_id'],
            'sender_email': bundle.inputData?.[keyPrefix + 'sender_email'],
            'recipient_email': bundle.inputData?.[keyPrefix + 'recipient_email'],
            'subject': bundle.inputData?.[keyPrefix + 'subject'],
            'body': bundle.inputData?.[keyPrefix + 'body'],
            'include': utils.removeIfEmpty(EmailSchedule_includeMapping(bundle, keyPrefix + 'include')),
            'attach_pdf': bundle.inputData?.[keyPrefix + 'attach_pdf'],
            'send_copy': bundle.inputData?.[keyPrefix + 'send_copy'],
        }
    },
}
