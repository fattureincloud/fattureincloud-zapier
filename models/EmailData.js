const _ = require('lodash')
const utils = require('../utils/utils');
const EmailData_default_sender_email = require('./EmailData_default_sender_email').fields;
const EmailData_default_sender_emailMapping = require('./EmailData_default_sender_email').mapping;
const SenderEmail = require('./SenderEmail').fields;
const SenderEmailMapping = require('./SenderEmail').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}recipient_email`,
                label: `Email recipient - [${keyPrefix}recipient_email]`,
                type: 'string',
            },
            ...EmailData_default_sender_email(`${keyPrefix}default_sender_email`),
            {
                key: `${keyPrefix}sender_emails_list`,
                label: `${keyPrefix}sender_emails_list]`,
                children: SenderEmail(`${keyPrefix}sender_emails_list`), 
            },
            {
                key: `${keyPrefix}cc_email`,
                label: `Email cc [by default is the logged company email] - [${keyPrefix}cc_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `Email subject - [${keyPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}body`,
                label: `Email body - [${keyPrefix}body]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}document_exists`,
                label: `Document exists if it is not a delivery note - [${keyPrefix}document_exists]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}delivery_note_exists`,
                label: `Document is a delivery note - [${keyPrefix}delivery_note_exists]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}attachment_exists`,
                label: `Document has attachment - [${keyPrefix}attachment_exists]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accompanying_invoice_exists`,
                label: `Document has accompanying invoice - [${keyPrefix}accompanying_invoice_exists]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}default_attach_pdf`,
                label: `Attach document pdf - [${keyPrefix}default_attach_pdf]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'recipient_email': bundle.inputData?.[`${keyPrefix}recipient_email`],
            'default_sender_email': utils.removeIfEmpty(EmailData_default_sender_emailMapping(bundle, `${keyPrefix}default_sender_email`)),
            'sender_emails_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}sender_emails_list`]),
            'cc_email': bundle.inputData?.[`${keyPrefix}cc_email`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'document_exists': bundle.inputData?.[`${keyPrefix}document_exists`],
            'delivery_note_exists': bundle.inputData?.[`${keyPrefix}delivery_note_exists`],
            'attachment_exists': bundle.inputData?.[`${keyPrefix}attachment_exists`],
            'accompanying_invoice_exists': bundle.inputData?.[`${keyPrefix}accompanying_invoice_exists`],
            'default_attach_pdf': bundle.inputData?.[`${keyPrefix}default_attach_pdf`],
        }
    },
}
