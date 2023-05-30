const _ = require('lodash')
const utils = require('../utils/utils');
const EmailData = require('./EmailData').fields;
const EmailDataMapping = require('./EmailData').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...EmailData(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EmailDataMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
