const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `Response message. - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `E-invoice sent date. - [${labelPrefix}date]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
        }
    },
}
