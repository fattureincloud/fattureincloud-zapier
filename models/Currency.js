const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Currency code - [${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}symbol`,
                label: `Currency symbol - [${labelPrefix}symbol]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}exchange_rate`,
                label: `Currency exchange rate (EUR to this) - [${labelPrefix}exchange_rate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}html_symbol`,
                label: `Currency html code - [${labelPrefix}html_symbol]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'symbol': bundle.inputData?.[`${keyPrefix}symbol`],
            'exchange_rate': bundle.inputData?.[`${keyPrefix}exchange_rate`],
            'html_symbol': bundle.inputData?.[`${keyPrefix}html_symbol`],
        }
    },
}
