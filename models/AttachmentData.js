const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}attachment_token`,
                label: `Uploaded attachment token. - [${keyPrefix}attachment_token]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'attachment_token': bundle.inputData?.[`${keyPrefix}attachment_token`],
        }
    },
}
