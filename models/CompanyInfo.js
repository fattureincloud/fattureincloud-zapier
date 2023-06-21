const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyType = require('./CompanyType').fields;
const CompanyInfo_access_info = require('./CompanyInfo_access_info').fields;
const CompanyInfo_access_infoMapping = require('./CompanyInfo_access_info').mapping;
const CompanyInfo_plan_info = require('./CompanyInfo_plan_info').fields;
const CompanyInfo_plan_infoMapping = require('./CompanyInfo_plan_info').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
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
                ...CompanyType(`${keyPrefix}type`, isInput),
            },
            ...CompanyInfo_access_info(`${keyPrefix}access_info`, isInput),
            ...CompanyInfo_plan_info(`${keyPrefix}plan_info`, isInput),
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
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'access_info': utils.removeIfEmpty(CompanyInfo_access_infoMapping(bundle, `${keyPrefix}access_info`)),
            'plan_info': utils.removeIfEmpty(CompanyInfo_plan_infoMapping(bundle, `${keyPrefix}plan_info`)),
            'accountant_id': bundle.inputData?.[`${keyPrefix}accountant_id`],
            'is_accountant': bundle.inputData?.[`${keyPrefix}is_accountant`],
        }
    },
}
