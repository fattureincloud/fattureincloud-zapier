const utils = require('../utils/utils');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...VatType.fields(`${keyPrefix}vat`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'vat': utils.removeIfEmpty(VatType.mapping(bundle, `${keyPrefix}vat`)),
        }
    },
}
