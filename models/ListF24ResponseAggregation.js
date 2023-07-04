const _ = require('lodash')
const utils = require('../utils/utils');
const ListF24ResponseAggregatedData = require('../models/ListF24ResponseAggregatedData');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...ListF24ResponseAggregatedData.fields(`${keyPrefix}aggregated_data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'aggregated_data': utils.removeIfEmpty(ListF24ResponseAggregatedData.mapping(bundle, `${keyPrefix}aggregated_data`)),
        }
    },
}
