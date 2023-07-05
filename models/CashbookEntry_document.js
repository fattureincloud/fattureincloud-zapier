const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Cashbook related document id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                label: `Cashbook related document type - [${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `Cashbook related document path - [${labelPrefix}path]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
        }
    },
}
