const utils = require('../utils/utils');
const ReceiptPreCreateInfo = require('../models/ReceiptPreCreateInfo');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ReceiptPreCreateInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(ReceiptPreCreateInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
