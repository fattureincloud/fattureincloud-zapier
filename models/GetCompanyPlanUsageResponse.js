const utils = require('../utils/utils');
const CompanyPlanUsage = require('../models/CompanyPlanUsage');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...CompanyPlanUsage.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(CompanyPlanUsage.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
