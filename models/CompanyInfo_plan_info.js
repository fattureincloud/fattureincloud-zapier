const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyInfo_plan_info_functions = require('../models/CompanyInfo_plan_info_functions');
const CompanyInfo_plan_info_functions_status = require('../models/CompanyInfo_plan_info_functions_status');
const CompanyInfo_plan_info_limits = require('../models/CompanyInfo_plan_info_limits');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...CompanyInfo_plan_info_limits.fields(`${keyPrefix}limits`, isInput),
            ...CompanyInfo_plan_info_functions.fields(`${keyPrefix}functions`, isInput),
            ...CompanyInfo_plan_info_functions_status.fields(`${keyPrefix}functions_status`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'limits': utils.removeIfEmpty(CompanyInfo_plan_info_limits.mapping(bundle, `${keyPrefix}limits`)),
            'functions': utils.removeIfEmpty(CompanyInfo_plan_info_functions.mapping(bundle, `${keyPrefix}functions`)),
            'functions_status': utils.removeIfEmpty(CompanyInfo_plan_info_functions_status.mapping(bundle, `${keyPrefix}functions_status`)),
        }
    },
}
