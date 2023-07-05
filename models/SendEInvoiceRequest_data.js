const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}cassa_type`,
                label: `Value of TipoCassa used (optional, override the company default value). - [${labelPrefix}cassa_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}withholding_tax_causal`,
                label: `Value of CausalePagamento used (optional, override the company default value). - [${labelPrefix}withholding_tax_causal]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'cassa_type': bundle.inputData?.[`${keyPrefix}cassa_type`],
            'withholding_tax_causal': bundle.inputData?.[`${keyPrefix}withholding_tax_causal`],
        }
    },
}
