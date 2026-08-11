const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
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
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'ts_communication': bundle.inputData?.[`${keyPrefix}ts_communication`],
            'ts_tipo_spesa': bundle.inputData?.[`${keyPrefix}ts_tipo_spesa`],
            'ts_flag_tipo_spesa': bundle.inputData?.[`${keyPrefix}ts_flag_tipo_spesa`],
            'ts_pagamento_tracciato': bundle.inputData?.[`${keyPrefix}ts_pagamento_tracciato`],
        }
    },
}
