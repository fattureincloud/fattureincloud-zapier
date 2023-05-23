const _ = require('lodash')
const utils = require('../utils/utils');
const CashbookEntry = require('./CashbookEntry').fields;
const CashbookEntryMapping = require('./CashbookEntry').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'data',
                
                children: CashbookEntry(keyPrefix + 'data'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'data']),
        }
    },
}
