const _ = require('lodash')
const utils = require('../utils/utils');
const CashbookEntry = require('./CashbookEntry').fields;
const CashbookEntryMapping = require('./CashbookEntry').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...CashbookEntry(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(CashbookEntryMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
