const _ = require('lodash')
const utils = require('../utils/utils');

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
                label: labelPrefix + 'Archive document unique identifier.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'date',
                label: labelPrefix + 'Archive document date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'description',
                label: labelPrefix + 'Archive Document description.',
                type: 'string',
            },
            {
                key: keyPrefix + 'attachment_url',
                label: labelPrefix + '[Temporary] [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /archive or PUT /archive/{documentId}.',
                type: 'string',
            },
            {
                key: keyPrefix + 'category',
                label: labelPrefix + 'Archive document category.',
                type: 'string',
            },
            {
                key: keyPrefix + 'attachment_token',
                label: labelPrefix + '[Write Only]  [Required] Attachment token returned by POST /archive/attachment. Used to attach the file already uploaded.',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'date': bundle.inputData?.[keyPrefix + 'date'],
            'description': bundle.inputData?.[keyPrefix + 'description'],
            'attachment_url': bundle.inputData?.[keyPrefix + 'attachment_url'],
            'category': bundle.inputData?.[keyPrefix + 'category'],
            'attachment_token': bundle.inputData?.[keyPrefix + 'attachment_token'],
        }
    },
}
