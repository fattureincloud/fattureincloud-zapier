const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyInfo_plan_info_limits = require('./CompanyInfo_plan_info_limits').fields;
const CompanyInfo_plan_info_limitsMapping = require('./CompanyInfo_plan_info_limits').mapping;
const CompanyInfo_plan_info_functions = require('./CompanyInfo_plan_info_functions').fields;
const CompanyInfo_plan_info_functionsMapping = require('./CompanyInfo_plan_info_functions').mapping;
const CompanyInfo_plan_info_functions_status = require('./CompanyInfo_plan_info_functions_status').fields;
const CompanyInfo_plan_info_functions_statusMapping = require('./CompanyInfo_plan_info_functions_status').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...CompanyInfo_plan_info_limits(`${keyPrefix}limits`, isInput),
            ...CompanyInfo_plan_info_functions(`${keyPrefix}functions`, isInput),
            ...CompanyInfo_plan_info_functions_status(`${keyPrefix}functions_status`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'limits': utils.removeIfEmpty(CompanyInfo_plan_info_limitsMapping(bundle, `${keyPrefix}limits`)),
            'functions': utils.removeIfEmpty(CompanyInfo_plan_info_functionsMapping(bundle, `${keyPrefix}functions`)),
            'functions_status': utils.removeIfEmpty(CompanyInfo_plan_info_functions_statusMapping(bundle, `${keyPrefix}functions_status`)),
        }
    },
}
