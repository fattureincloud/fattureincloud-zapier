const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Archive document unique identifier. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}date`,
                label: `Archive document date. - [${keyPrefix}date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}description`,
                label: `Archive Document description. - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /archive or PUT /archive/{documentId}. - [${keyPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `Archive document category. - [${keyPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_token`,
                label: `[Write Only]  [Required] Attachment token returned by POST /archive/attachment. Used to attach the file already uploaded. - [${keyPrefix}attachment_token]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'attachment_url': bundle.inputData?.[`${keyPrefix}attachment_url`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'attachment_token': bundle.inputData?.[`${keyPrefix}attachment_token`],
        }
    },
}
