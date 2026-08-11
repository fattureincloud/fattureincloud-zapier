const utils = require('../utils/utils');
const CompanyInfo_access_info = require('../models/CompanyInfo_access_info');
const CompanyInfo_plan_info = require('../models/CompanyInfo_plan_info');
const CompanyType = require('../models/CompanyType');
const FattureInCloudPlanType = require('../models/FattureInCloudPlanType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Company id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Company name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Company email - [${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...CompanyType.fields(`${keyPrefix}type`, isInput),
            },
            ...CompanyInfo_access_info.fields(`${keyPrefix}access_info`, isInput),
            {
                key: `${keyPrefix}fic_license_expire`,
                label: `[${labelPrefix}fic_license_expire]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fic_plan_name`,
                ...FattureInCloudPlanType.fields(`${keyPrefix}fic_plan_name`, isInput),
            },
            ...CompanyInfo_plan_info.fields(`${keyPrefix}plan_info`, isInput),
            {
                key: `${keyPrefix}accountant_id`,
                label: `Company accountant id - [${labelPrefix}accountant_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}is_accountant`,
                label: `Is the logged account an accountant. - [${labelPrefix}is_accountant]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'access_info': utils.removeIfEmpty(CompanyInfo_access_info.mapping(bundle, `${keyPrefix}access_info`)),
            'fic_license_expire': bundle.inputData?.[`${keyPrefix}fic_license_expire`],
            'fic_plan_name': bundle.inputData?.[`${keyPrefix}fic_plan_name`],
            'plan_info': utils.removeIfEmpty(CompanyInfo_plan_info.mapping(bundle, `${keyPrefix}plan_info`)),
            'accountant_id': bundle.inputData?.[`${keyPrefix}accountant_id`],
            'is_accountant': bundle.inputData?.[`${keyPrefix}is_accountant`],
        }
    },
}
