const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'fix_payments',
                label: labelPrefix + 'Fixes your last payment amount to match your document total',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'create_from',
                label: labelPrefix + 'Original documents ids [only for join/transform]',
                list: true,
                type: 'string',
            },
            {
                key: keyPrefix + 'transform',
                label: labelPrefix + 'Tranform a document. [only for transform]',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'keep_copy',
                label: labelPrefix + 'Keep original document [only for transform]',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'join_type',
                label: labelPrefix + 'Join type [only for join]',
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'fix_payments': bundle.inputData?.[keyPrefix + 'fix_payments'],
            'create_from': bundle.inputData?.[keyPrefix + 'create_from'],
            'transform': bundle.inputData?.[keyPrefix + 'transform'],
            'keep_copy': bundle.inputData?.[keyPrefix + 'keep_copy'],
            'join_type': bundle.inputData?.[keyPrefix + 'join_type'],
        }
    },
}
