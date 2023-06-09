const _ = require('lodash')
const utils = require('../utils/utils');
const CompanyType = require('./CompanyType').fields;
const CompanyInfo_access_info = require('./CompanyInfo_access_info').fields;
const CompanyInfo_access_infoMapping = require('./CompanyInfo_access_info').mapping;
const CompanyInfo_plan_info = require('./CompanyInfo_plan_info').fields;
const CompanyInfo_plan_infoMapping = require('./CompanyInfo_plan_info').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Company id - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Company name - [${keyPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Company email - [${keyPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...CompanyType(`${keyPrefix}type`),
            },
            ...CompanyInfo_access_info(`${keyPrefix}access_info`),
            ...CompanyInfo_plan_info(`${keyPrefix}plan_info`),
            {
                key: `${keyPrefix}accountant_id`,
                label: `Company accountant id - [${keyPrefix}accountant_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}is_accountant`,
                label: `Is the logged account an accountant. - [${keyPrefix}is_accountant]`,
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
