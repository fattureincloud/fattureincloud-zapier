const _ = require('lodash')
const utils = require('../utils/utils');
const Receipt = require('./Receipt').fields;
const ReceiptMapping = require('./Receipt').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...Receipt(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceiptMapping(bundle, keyPrefix + 'data')),
        }
    },
}
