const utils = require('../utils/utils');
const CompanyType = require('../models/CompanyType');
const FattureInCloudPlanType = require('../models/FattureInCloudPlanType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Controlled company id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `Controlled company id - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...CompanyType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}access_token`,
                label: `Controlled company access token Only if type=company] - [${labelPrefix}access_token]`,
                type: 'string',
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
                label: `Controlled company connection id - [${labelPrefix}connection_id]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Controlled company tax code - [${labelPrefix}tax_code]`,
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
            'fic_license_expire': bundle.inputData?.[`${keyPrefix}fic_license_expire`],
            'fic_plan': bundle.inputData?.[`${keyPrefix}fic_plan`],
            'connection_id': bundle.inputData?.[`${keyPrefix}connection_id`],
            'tax_code': bundle.inputData?.[`${keyPrefix}tax_code`],
        }
    },
}
