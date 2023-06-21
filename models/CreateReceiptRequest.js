const _ = require('lodash')
const utils = require('../utils/utils');
const Receipt = require('./Receipt').fields;
const ReceiptMapping = require('./Receipt').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...Receipt(`${keyPrefix}data`, isInput),
            {
                key: `${keyPrefix}autocomplete_number`,
                label: `If true, the number is autocompleted progressively. - [${labelPrefix}autocomplete_number]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceiptMapping(bundle, `${keyPrefix}data`)),
            'autocomplete_number': bundle.inputData?.[`${keyPrefix}autocomplete_number`],
        }
    },
}
