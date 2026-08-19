const utils = require('../utils/utils');
const Receipt = require('../models/Receipt');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Receipt.fields(`${keyPrefix}data`, isInput),
            {
                key: `${keyPrefix}autocomplete_number`,
                label: `If true, the number is autocompleted progressively. - [${labelPrefix}autocomplete_number]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(Receipt.mapping(bundle, `${keyPrefix}data`)),
            'autocomplete_number': bundle.inputData?.[`${keyPrefix}autocomplete_number`],
        }
    },
}
