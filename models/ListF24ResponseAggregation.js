const _ = require('lodash')
const utils = require('../utils/utils');
const ListF24ResponseAggregatedData = require('./ListF24ResponseAggregatedData').fields;
const ListF24ResponseAggregatedDataMapping = require('./ListF24ResponseAggregatedData').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            ...ListF24ResponseAggregatedData(`${keyPrefix}aggregated_data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'aggregated_data': utils.removeIfEmpty(ListF24ResponseAggregatedDataMapping(bundle, `${keyPrefix}aggregated_data`)),
        }
    },
}
