const utils = require('../utils/utils');
const Company = require('../models/Company');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}companies`,
                label: `[${labelPrefix}companies]`,
                children: Company.fields(`${keyPrefix}companies${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'companies': utils.childMapping(bundle.inputData?.[`${keyPrefix}companies`], `${keyPrefix}companies`, Company),
        }
    },
}
