const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}xml_errors`,
                label: `[${keyPrefix}xml_errors]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'xml_errors': bundle.inputData?.[`${keyPrefix}xml_errors`],
        }
    },
}