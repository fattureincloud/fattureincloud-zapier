const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}limit`,
                label: `Plan limit - [${labelPrefix}limit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}usage`,
                label: `Plan usage - [${labelPrefix}usage]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'limit': bundle.inputData?.[`${keyPrefix}limit`],
            'usage': bundle.inputData?.[`${keyPrefix}usage`],
        }
    },
}
