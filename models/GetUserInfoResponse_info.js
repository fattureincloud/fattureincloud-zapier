const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}need_marketing_consents_confirmation`,
                label: `[${keyPrefix}need_marketing_consents_confirmation]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}need_password_change`,
                label: `[${keyPrefix}need_password_change]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}need_terms_of_service_confirmation`,
                label: `[${keyPrefix}need_terms_of_service_confirmation]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'need_marketing_consents_confirmation': bundle.inputData?.[`${keyPrefix}need_marketing_consents_confirmation`],
            'need_password_change': bundle.inputData?.[`${keyPrefix}need_password_change`],
            'need_terms_of_service_confirmation': bundle.inputData?.[`${keyPrefix}need_terms_of_service_confirmation`],
        }
    },
}
