const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocument = require('../models/ReceivedDocument');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ReceivedDocument.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ReceivedDocument.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
