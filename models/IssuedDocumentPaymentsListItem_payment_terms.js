const _ = require('lodash')
const utils = require('../utils/utils');
const PaymentTermsType = require('../models/PaymentTermsType');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}days`,
                label: `Issued document payment number of days by which the payment must be made - [${labelPrefix}days]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentTermsType.fields(`${keyPrefix}type`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'days': bundle.inputData?.[`${keyPrefix}days`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
