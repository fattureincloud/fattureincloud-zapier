const utils = require('../utils/utils');
const FunctionStatus = require('../models/FunctionStatus');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...FunctionStatus.fields(`${keyPrefix}ts_digital`, isInput),
            ...FunctionStatus.fields(`${keyPrefix}ts_pay`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'ts_digital': utils.removeIfEmpty(FunctionStatus.mapping(bundle, `${keyPrefix}ts_digital`)),
            'ts_pay': utils.removeIfEmpty(FunctionStatus.mapping(bundle, `${keyPrefix}ts_pay`)),
        }
    },
}
