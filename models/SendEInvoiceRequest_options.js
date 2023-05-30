const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}dry_run`,
                label: `If set to true the e-invoice will not be sent to the SDI. - [${keyPrefix}dry_run]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'dry_run': bundle.inputData?.[`${keyPrefix}dry_run`],
        }
    },
}
