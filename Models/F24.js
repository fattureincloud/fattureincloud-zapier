const _ = require('lodash')
const utils = require('../utils/utils');
const F24Status = require('./F24Status').fields;
const PaymentAccount = require('./PaymentAccount').fields;
const PaymentAccountMapping = require('./PaymentAccount').mapping;

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
                label: labelPrefix + 'Unique F24 identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'due_date',
                label: labelPrefix + 'Due date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'status',
                ...F24Status,
            },
            ...PaymentAccount(keyPrefix + 'payment_account'),
            {
                key: keyPrefix + 'amount',
                label: labelPrefix + 'Taxes amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'attachment_url',
                label: labelPrefix + '[Temporary] [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /taxes or PUT /taxes/{documentId}.',
                type: 'string',
            },
            {
                key: keyPrefix + 'attachment_token',
                label: labelPrefix + '[Write Only] Attachment token returned by POST /taxes/attachment. Used to attach the file already uploaded.',
                type: 'string',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Name or brief description.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'due_date': bundle.inputData?.[keyPrefix + 'due_date'],
            'status': bundle.inputData?.[keyPrefix + 'status'],
            'payment_account': utils.removeIfEmpty(PaymentAccountMapping(bundle, keyPrefix + 'payment_account')),
            'amount': bundle.inputData?.[keyPrefix + 'amount'],
            'attachment_url': bundle.inputData?.[keyPrefix + 'attachment_url'],
            'attachment_token': bundle.inputData?.[keyPrefix + 'attachment_token'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
        }
    },
}
