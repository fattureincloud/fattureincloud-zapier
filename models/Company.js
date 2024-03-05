const utils = require('../utils/utils');
const CompanyType = require('../models/CompanyType');
const ControlledCompany = require('../models/ControlledCompany');
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
                key: `${keyPrefix}type`,
                ...CompanyType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}access_token`,
                label: `Company authentication token for this company. [Only if type=company] - [${labelPrefix}access_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}controlled_companies`,
                label: `[${labelPrefix}controlled_companies]`,
                children: ControlledCompany.fields(`${keyPrefix}controlled_companies${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}fic_license_expire`,
                label: `[${labelPrefix}fic_license_expire]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fic_plan`,
                ...FattureInCloudPlanType.fields(`${keyPrefix}fic_plan`, isInput),
            },
            {
                key: `${keyPrefix}connection_id`,
                label: `Company connection id - [${labelPrefix}connection_id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Company tax code - [${labelPrefix}tax_code]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'access_token': bundle.inputData?.[`${keyPrefix}access_token`],
            'controlled_companies': utils.childMapping(bundle.inputData?.[`${keyPrefix}controlled_companies`], `${keyPrefix}controlled_companies`, ControlledCompany),
            'fic_license_expire': bundle.inputData?.[`${keyPrefix}fic_license_expire`],
            'fic_plan': bundle.inputData?.[`${keyPrefix}fic_plan`],
            'connection_id': bundle.inputData?.[`${keyPrefix}connection_id`],
            'tax_code': bundle.inputData?.[`${keyPrefix}tax_code`],
        }
    },
}
