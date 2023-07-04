const _ = require('lodash')
const utils = require('../utils/utils');
const CashbookEntry = require('../models/CashbookEntry');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...CashbookEntry.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(CashbookEntry.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
