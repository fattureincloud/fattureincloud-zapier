const _ = require('lodash')
const utils = require('../utils/utils');
const EmailData = require('./EmailData').fields;
const EmailDataMapping = require('./EmailData').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...EmailData(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EmailDataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
