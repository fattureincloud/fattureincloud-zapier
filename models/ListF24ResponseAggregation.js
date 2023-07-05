const utils = require('../utils/utils');
const ListF24ResponseAggregatedData = require('../models/ListF24ResponseAggregatedData');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ListF24ResponseAggregatedData.fields(`${keyPrefix}aggregated_data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'aggregated_data': utils.removeIfEmpty(ListF24ResponseAggregatedData.mapping(bundle, `${keyPrefix}aggregated_data`)),
        }
    },
}
