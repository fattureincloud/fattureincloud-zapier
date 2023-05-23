const _ = require('lodash')
const utils = require('../utils/utils');
const EmailStatus = require('./EmailStatus').fields;
const EmailRecipientStatus = require('./EmailRecipientStatus').fields;
const EmailAttachment = require('./EmailAttachment').fields;
const EmailAttachmentMapping = require('./EmailAttachment').mapping;

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
                key: keyPrefix + 'id',
                label: labelPrefix + 'Email unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'status',
                ...EmailStatus,
            },
            {
                key: keyPrefix + 'sent_date',
                label: labelPrefix + 'Email sent date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'errors_count',
                label: labelPrefix + 'Errors count.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'error_log',
                label: labelPrefix + 'Error log.',
                type: 'string',
            },
            {
                key: keyPrefix + 'from_email',
                label: labelPrefix + 'Sender email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'from_name',
                label: labelPrefix + 'Sender name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'to_email',
                label: labelPrefix + 'Recipient email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'to_name',
                label: labelPrefix + 'Receipient email.',
                type: 'string',
            },
            {
                key: keyPrefix + 'subject',
                label: labelPrefix + 'Email subject.',
                type: 'string',
            },
            {
                key: keyPrefix + 'content',
                label: labelPrefix + 'Email content.',
                type: 'string',
            },
            {
                key: keyPrefix + 'copy_to',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'recipient_status',
                ...EmailRecipientStatus,
            },
            {
                key: keyPrefix + 'recipient_date',
                
                type: 'datetime',
            },
            {
                key: keyPrefix + 'kind',
                label: labelPrefix + 'Email kind.',
                type: 'string',
            },
            {
                key: keyPrefix + 'attachments',
                
                children: EmailAttachment(keyPrefix + 'attachments'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'status': bundle.inputData?.[keyPrefix + 'status'],
            'sent_date': bundle.inputData?.[keyPrefix + 'sent_date'],
            'errors_count': bundle.inputData?.[keyPrefix + 'errors_count'],
            'error_log': bundle.inputData?.[keyPrefix + 'error_log'],
            'from_email': bundle.inputData?.[keyPrefix + 'from_email'],
            'from_name': bundle.inputData?.[keyPrefix + 'from_name'],
            'to_email': bundle.inputData?.[keyPrefix + 'to_email'],
            'to_name': bundle.inputData?.[keyPrefix + 'to_name'],
            'subject': bundle.inputData?.[keyPrefix + 'subject'],
            'content': bundle.inputData?.[keyPrefix + 'content'],
            'copy_to': bundle.inputData?.[keyPrefix + 'copy_to'],
            'recipient_status': bundle.inputData?.[keyPrefix + 'recipient_status'],
            'recipient_date': bundle.inputData?.[keyPrefix + 'recipient_date'],
            'kind': bundle.inputData?.[keyPrefix + 'kind'],
            'attachments': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'attachments']),
        }
    },
}
