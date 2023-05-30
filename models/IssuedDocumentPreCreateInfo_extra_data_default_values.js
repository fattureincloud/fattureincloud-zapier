const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}ts_communication`,
                label: `[${keyPrefix}ts_communication]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_tipo_spesa`,
                label: `[${keyPrefix}ts_tipo_spesa]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_flag_tipo_spesa`,
                label: `[${keyPrefix}ts_flag_tipo_spesa]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ts_pagamento_tracciato`,
                label: `[${keyPrefix}ts_pagamento_tracciato]`,
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
