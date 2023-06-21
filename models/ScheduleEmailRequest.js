const _ = require('lodash')
const utils = require('../utils/utils');
const EmailSchedule = require('./EmailSchedule').fields;
const EmailScheduleMapping = require('./EmailSchedule').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...EmailSchedule(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EmailScheduleMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
