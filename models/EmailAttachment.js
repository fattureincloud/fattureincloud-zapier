const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}filename`,
                label: `Email attachment filename - [${labelPrefix}filename]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `Email attachment url - [${labelPrefix}url]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
        }
    },
}
