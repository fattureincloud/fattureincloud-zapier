const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}clients`,
                label: `Company plan clients limits - [${labelPrefix}clients]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}suppliers`,
                label: `Company plan suppliers limits - [${labelPrefix}suppliers]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}products`,
                label: `Company plan products limits - [${labelPrefix}products]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}documents`,
                label: `Company plan documents limits - [${labelPrefix}documents]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'clients': bundle.inputData?.[`${keyPrefix}clients`],
            'suppliers': bundle.inputData?.[`${keyPrefix}suppliers`],
            'products': bundle.inputData?.[`${keyPrefix}products`],
            'documents': bundle.inputData?.[`${keyPrefix}documents`],
        }
    },
}
