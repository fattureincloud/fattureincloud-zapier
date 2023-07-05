const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}need_marketing_consents_confirmation`,
                label: `[${labelPrefix}need_marketing_consents_confirmation]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}need_password_change`,
                label: `[${labelPrefix}need_password_change]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}need_terms_of_service_confirmation`,
                label: `[${labelPrefix}need_terms_of_service_confirmation]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'need_marketing_consents_confirmation': bundle.inputData?.[`${keyPrefix}need_marketing_consents_confirmation`],
            'need_password_change': bundle.inputData?.[`${keyPrefix}need_password_change`],
            'need_terms_of_service_confirmation': bundle.inputData?.[`${keyPrefix}need_terms_of_service_confirmation`],
        }
    },
}
