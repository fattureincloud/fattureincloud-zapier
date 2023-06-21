const _ = require('lodash')
const utils = require('../utils/utils');
const FunctionStatus = require('./FunctionStatus').fields;
const FunctionStatusMapping = require('./FunctionStatus').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...FunctionStatus(`${keyPrefix}ts_digital`, isInput),
            ...FunctionStatus(`${keyPrefix}ts_pay`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'ts_digital': utils.removeIfEmpty(FunctionStatusMapping(bundle, `${keyPrefix}ts_digital`)),
            'ts_pay': utils.removeIfEmpty(FunctionStatusMapping(bundle, `${keyPrefix}ts_pay`)),
        }
    },
}
