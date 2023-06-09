const _ = require('lodash')
const utils = require('../utils/utils');
const EmailStatus = require('./EmailStatus').fields;
const EmailRecipientStatus = require('./EmailRecipientStatus').fields;
const EmailAttachment = require('./EmailAttachment').fields;
const EmailAttachmentMapping = require('./EmailAttachment').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Email id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}status`,
                ...EmailStatus(`${keyPrefix}status`),
            },
            {
                key: `${keyPrefix}sent_date`,
                label: `Email sent date - [${keyPrefix}sent_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}errors_count`,
                label: `Email errors count - [${keyPrefix}errors_count]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}error_log`,
                label: `Email errors log - [${keyPrefix}error_log]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from_email`,
                label: `Email sender email - [${keyPrefix}from_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from_name`,
                label: `Email sender name - [${keyPrefix}from_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}to_email`,
                label: `Email recipient email - [${keyPrefix}to_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}to_name`,
                label: `Email receipient name - [${keyPrefix}to_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `Email subject - [${keyPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}content`,
                label: `Email content - [${keyPrefix}content]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}copy_to`,
                label: `Email cc - [${keyPrefix}copy_to]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipient_status`,
                ...EmailRecipientStatus(`${keyPrefix}recipient_status`),
            },
            {
                key: `${keyPrefix}recipient_date`,
                label: `Email recipient date - [${keyPrefix}recipient_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}kind`,
                label: `Email kind - [${keyPrefix}kind]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachments`,
                label: `${keyPrefix}attachments]`,
                children: EmailAttachment(`${keyPrefix}attachments`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'sent_date': bundle.inputData?.[`${keyPrefix}sent_date`],
            'errors_count': bundle.inputData?.[`${keyPrefix}errors_count`],
            'error_log': bundle.inputData?.[`${keyPrefix}error_log`],
            'from_email': bundle.inputData?.[`${keyPrefix}from_email`],
            'from_name': bundle.inputData?.[`${keyPrefix}from_name`],
            'to_email': bundle.inputData?.[`${keyPrefix}to_email`],
            'to_name': bundle.inputData?.[`${keyPrefix}to_name`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'copy_to': bundle.inputData?.[`${keyPrefix}copy_to`],
            'recipient_status': bundle.inputData?.[`${keyPrefix}recipient_status`],
            'recipient_date': bundle.inputData?.[`${keyPrefix}recipient_date`],
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
            'attachments': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}attachments`]),
        }
    },
}
