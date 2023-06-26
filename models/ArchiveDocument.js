const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Archive document id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}date`,
                label: `Archive document date - [${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `Archive Document description - [${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only] Archive Document url of the attached file - [${labelPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `Archive document category - [${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_token`,
                label: `[Write Only]  [Required] Archive document attachment token returned by POST /archive/attachment - [${labelPrefix}attachment_token]`,
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
