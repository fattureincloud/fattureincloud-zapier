const _ = require('lodash')
const utils = require('../utils/utils');
const EmailSchedule = require('./EmailSchedule').fields;
const EmailScheduleMapping = require('./EmailSchedule').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...EmailSchedule(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(EmailScheduleMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
