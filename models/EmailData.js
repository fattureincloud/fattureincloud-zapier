const _ = require('lodash')
const utils = require('../utils/utils');
const EmailData_default_sender_email = require('./EmailData_default_sender_email').fields;
const EmailData_default_sender_emailMapping = require('./EmailData_default_sender_email').mapping;
const SenderEmail = require('./SenderEmail').fields;
const SenderEmailMapping = require('./SenderEmail').mapping;

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
                key: keyPrefix + 'recipient_email',
                label: labelPrefix + 'Recipient&#39;s email',
                type: 'string',
            },
            ...EmailData_default_sender_email(keyPrefix + 'default_sender_email'),
            {
                key: keyPrefix + 'sender_emails_list',
                
                children: SenderEmail(keyPrefix + 'sender_emails_list'), 
            },
            {
                key: keyPrefix + 'cc_email',
                label: labelPrefix + 'By default is the logged company email. This is the email address to which a copy will be sent.',
                type: 'string',
            },
            {
                key: keyPrefix + 'subject',
                label: labelPrefix + 'Email subject',
                type: 'string',
            },
            {
                key: keyPrefix + 'body',
                label: labelPrefix + 'Email body',
                type: 'string',
            },
            {
                key: keyPrefix + 'document_exists',
                label: labelPrefix + 'If the document is not a delivery note, this flag will be set to true',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'delivery_note_exists',
                label: labelPrefix + 'If the document is a delivery note, this flag will be set to true',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'attachment_exists',
                label: labelPrefix + 'If the document has one or more attachments, this flag will be set to true',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'accompanying_invoice_exists',
                label: labelPrefix + 'If an accompanying invoice exists, this flag will be set to true',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'default_attach_pdf',
                label: labelPrefix + 'If a pdf is attached, this flag will be set to true',
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'recipient_email': bundle.inputData?.[keyPrefix + 'recipient_email'],
            'default_sender_email': utils.removeIfEmpty(EmailData_default_sender_emailMapping(bundle, keyPrefix + 'default_sender_email')),
            'sender_emails_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'sender_emails_list']),
            'cc_email': bundle.inputData?.[keyPrefix + 'cc_email'],
            'subject': bundle.inputData?.[keyPrefix + 'subject'],
            'body': bundle.inputData?.[keyPrefix + 'body'],
            'document_exists': bundle.inputData?.[keyPrefix + 'document_exists'],
            'delivery_note_exists': bundle.inputData?.[keyPrefix + 'delivery_note_exists'],
            'attachment_exists': bundle.inputData?.[keyPrefix + 'attachment_exists'],
            'accompanying_invoice_exists': bundle.inputData?.[keyPrefix + 'accompanying_invoice_exists'],
            'default_attach_pdf': bundle.inputData?.[keyPrefix + 'default_attach_pdf'],
        }
    },
}
