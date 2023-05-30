const _ = require('lodash')
const utils = require('../utils/utils');
const Receipt = require('./Receipt').fields;
const ReceiptMapping = require('./Receipt').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...Receipt(`${keyPrefix}data`),
            {
                key: `${keyPrefix}autocomplete_number`,
                label: `If true, the number is autocompleted progressively. - [${keyPrefix}autocomplete_number]`,
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
