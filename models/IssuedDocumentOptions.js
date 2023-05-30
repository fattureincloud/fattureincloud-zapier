const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}fix_payments`,
                label: `Fixes your last payment amount to match your document total - [${keyPrefix}fix_payments]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}create_from`,
                label: `Original documents ids [only for join/transform] - [${keyPrefix}create_from]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}transform`,
                label: `Tranform a document. [only for transform] - [${keyPrefix}transform]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}keep_copy`,
                label: `Keep original document [only for transform] - [${keyPrefix}keep_copy]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}join_type`,
                label: `Join type [only for join] - [${keyPrefix}join_type]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'fix_payments': bundle.inputData?.[`${keyPrefix}fix_payments`],
            'create_from': bundle.inputData?.[`${keyPrefix}create_from`],
            'transform': bundle.inputData?.[`${keyPrefix}transform`],
            'keep_copy': bundle.inputData?.[`${keyPrefix}keep_copy`],
            'join_type': bundle.inputData?.[`${keyPrefix}join_type`],
        }
    },
}
