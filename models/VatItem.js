const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount_net`,
                label: `Vat item net amount - [${labelPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Vat item vat amount - [${labelPrefix}amount_vat]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
        }
    },
}
