const utils = require('../utils/utils');
const PaymentTermsType = require('../models/PaymentTermsType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}days`,
                label: `Received document payment number of days by which the payment must be made - [${labelPrefix}days]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                ...PaymentTermsType.fields(`${keyPrefix}type`, isInput),
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'days': bundle.inputData?.[`${keyPrefix}days`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
