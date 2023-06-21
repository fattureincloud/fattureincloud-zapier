const _ = require('lodash')
const utils = require('../utils/utils');
const CashbookEntry = require('./CashbookEntry').fields;
const CashbookEntryMapping = require('./CashbookEntry').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...CashbookEntry(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(CashbookEntryMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
