const utils = require('../utils/utils');
const F24Status = require('../models/F24Status');
const PaymentAccount = require('../models/PaymentAccount');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `F24 id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}due_date`,
                label: `F24 due date - [${labelPrefix}due_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                ...F24Status.fields(`${keyPrefix}status`, isInput),
            },
            ...PaymentAccount.fields(`${keyPrefix}payment_account`, isInput),
            {
                key: `${keyPrefix}amount`,
                label: `F24 amount - [${labelPrefix}amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only] F24 url of the attached file - [${labelPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_token`,
                label: `[Write Only]  F24 attachment token returned by POST /taxes/attachment - [${labelPrefix}attachment_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `F24 description - [${labelPrefix}description]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'due_date': bundle.inputData?.[`${keyPrefix}due_date`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'payment_account': utils.removeIfEmpty(PaymentAccount.mapping(bundle, `${keyPrefix}payment_account`)),
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'attachment_url': bundle.inputData?.[`${keyPrefix}attachment_url`],
            'attachment_token': bundle.inputData?.[`${keyPrefix}attachment_token`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
        }
    },
}
