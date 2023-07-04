const _ = require('lodash')
const utils = require('../utils/utils');
const EmailAttachment = require('../models/EmailAttachment');
const EmailRecipientStatus = require('../models/EmailRecipientStatus');
const EmailStatus = require('../models/EmailStatus');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Email id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}status`,
                ...EmailStatus.fields(`${keyPrefix}status`, isInput),
            },
            {
                key: `${keyPrefix}sent_date`,
                label: `Email sent date - [${labelPrefix}sent_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}errors_count`,
                label: `Email errors count - [${labelPrefix}errors_count]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}error_log`,
                label: `Email errors log - [${labelPrefix}error_log]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from_email`,
                label: `Email sender email - [${labelPrefix}from_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from_name`,
                label: `Email sender name - [${labelPrefix}from_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}to_email`,
                label: `Email recipient email - [${labelPrefix}to_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}to_name`,
                label: `Email receipient name - [${labelPrefix}to_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `Email subject - [${labelPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}content`,
                label: `Email content - [${labelPrefix}content]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}copy_to`,
                label: `Email cc - [${labelPrefix}copy_to]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipient_status`,
                ...EmailRecipientStatus.fields(`${keyPrefix}recipient_status`, isInput),
            },
            {
                key: `${keyPrefix}recipient_date`,
                label: `Email recipient date - [${labelPrefix}recipient_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kind`,
                label: `Email kind - [${labelPrefix}kind]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachments`,
                label: `[${labelPrefix}attachments]`,
                children: EmailAttachment.fields(`${keyPrefix}attachments${!isInput && '[]'}`), 
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
