const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}cassa_type`,
                label: `Value of TipoCassa used (optional, override the company default value). - [${keyPrefix}cassa_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}withholding_tax_causal`,
                label: `Value of CausalePagamento used (optional, override the company default value). - [${keyPrefix}withholding_tax_causal]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'cassa_type': bundle.inputData?.[`${keyPrefix}cassa_type`],
            'withholding_tax_causal': bundle.inputData?.[`${keyPrefix}withholding_tax_causal`],
        }
    },
}
