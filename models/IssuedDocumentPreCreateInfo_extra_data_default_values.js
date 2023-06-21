const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}ts_communication`,
                label: `[${labelPrefix}ts_communication]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_tipo_spesa`,
                label: `[${labelPrefix}ts_tipo_spesa]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_flag_tipo_spesa`,
                label: `[${labelPrefix}ts_flag_tipo_spesa]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ts_pagamento_tracciato`,
                label: `[${labelPrefix}ts_pagamento_tracciato]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'ts_communication': bundle.inputData?.[`${keyPrefix}ts_communication`],
            'ts_tipo_spesa': bundle.inputData?.[`${keyPrefix}ts_tipo_spesa`],
            'ts_flag_tipo_spesa': bundle.inputData?.[`${keyPrefix}ts_flag_tipo_spesa`],
            'ts_pagamento_tracciato': bundle.inputData?.[`${keyPrefix}ts_pagamento_tracciato`],
        }
    },
}
