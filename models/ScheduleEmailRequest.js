const _ = require('lodash')
const utils = require('../utils/utils');
const EmailSchedule = require('../models/EmailSchedule');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...EmailSchedule.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EmailSchedule.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
