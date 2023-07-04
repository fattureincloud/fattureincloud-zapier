const _ = require('lodash')
const utils = require('../utils/utils');
const FunctionStatus = require('../models/FunctionStatus');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...FunctionStatus.fields(`${keyPrefix}ts_digital`, isInput),
            ...FunctionStatus.fields(`${keyPrefix}ts_pay`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'ts_digital': utils.removeIfEmpty(FunctionStatus.mapping(bundle, `${keyPrefix}ts_digital`)),
            'ts_pay': utils.removeIfEmpty(FunctionStatus.mapping(bundle, `${keyPrefix}ts_pay`)),
        }
    },
}
