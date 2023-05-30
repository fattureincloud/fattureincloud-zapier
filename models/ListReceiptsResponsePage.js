const _ = require('lodash')
const utils = require('../utils/utils');
const Receipt = require('./Receipt').fields;
const ReceiptMapping = require('./Receipt').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}data`,
                label: `${keyPrefix}data]`,
                children: Receipt(`${keyPrefix}data`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}data`]),
        }
    },
}
