const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}multifatture_sent`,
                label: `[${labelPrefix}multifatture_sent]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ts_communication`,
                label: `Send issued document to \"Sistema Tessera Sanitaria\" - [${labelPrefix}ts_communication]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_flag_tipo_spesa`,
                label: `Issued document ts \"tipo spesa\" [TK, FC, FV, SV,SP, AD, AS, ECG, SR] - [${labelPrefix}ts_flag_tipo_spesa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}ts_pagamento_tracciato`,
                label: `Issued document ts traced payment - [${labelPrefix}ts_pagamento_tracciato]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_tipo_spesa`,
                label: `Can be [ 'TK', 'FC', 'FV', 'SV', 'SP', 'AD', 'AS', 'SR', 'CT', 'PI', 'IC', 'AA' ]. Refer to the technical specifications to learn more. - [${labelPrefix}ts_tipo_spesa]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_opposizione`,
                label: `Issued document ts \"opposizione\" - [${labelPrefix}ts_opposizione]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_status`,
                label: `Issued document ts status - [${labelPrefix}ts_status]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ts_file_id`,
                label: `Issued document ts file id - [${labelPrefix}ts_file_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_sent_date`,
                label: `Issued document ts sent date - [${labelPrefix}ts_sent_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_full_amount`,
                label: `Issued document ts total amount - [${labelPrefix}ts_full_amount]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}imported_by`,
                label: `Issued document imported by software - [${labelPrefix}imported_by]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'multifatture_sent': bundle.inputData?.[`${keyPrefix}multifatture_sent`],
            'ts_communication': bundle.inputData?.[`${keyPrefix}ts_communication`],
            'ts_flag_tipo_spesa': bundle.inputData?.[`${keyPrefix}ts_flag_tipo_spesa`],
            'ts_pagamento_tracciato': bundle.inputData?.[`${keyPrefix}ts_pagamento_tracciato`],
            'ts_tipo_spesa': bundle.inputData?.[`${keyPrefix}ts_tipo_spesa`],
            'ts_opposizione': bundle.inputData?.[`${keyPrefix}ts_opposizione`],
            'ts_status': bundle.inputData?.[`${keyPrefix}ts_status`],
            'ts_file_id': bundle.inputData?.[`${keyPrefix}ts_file_id`],
            'ts_sent_date': bundle.inputData?.[`${keyPrefix}ts_sent_date`],
            'ts_full_amount': bundle.inputData?.[`${keyPrefix}ts_full_amount`],
            'imported_by': bundle.inputData?.[`${keyPrefix}imported_by`],
        }
    },
}
