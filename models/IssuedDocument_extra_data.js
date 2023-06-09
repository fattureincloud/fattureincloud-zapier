const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}show_sofort_button`,
                label: `[${keyPrefix}show_sofort_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}multifatture_sent`,
                label: `[${keyPrefix}multifatture_sent]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ts_communication`,
                label: `Send issued document to \"Sistema Tessera Sanitaria\" - [${keyPrefix}ts_communication]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_flag_tipo_spesa`,
                label: `Issued document ts \"tipo spesa\" [TK, FC, FV, SV,SP, AD, AS, ECG, SR] - [${keyPrefix}ts_flag_tipo_spesa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}ts_pagamento_tracciato`,
                label: `Issued document ts traced payment - [${keyPrefix}ts_pagamento_tracciato]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_tipo_spesa`,
                label: `Can be [ 'TK', 'FC', 'FV', 'SV', 'SP', 'AD', 'AS', 'SR', 'CT', 'PI', 'IC', 'AA' ]. Refer to the technical specifications to learn more. - [${keyPrefix}ts_tipo_spesa]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_opposizione`,
                label: `Issued document ts \"opposizione\" - [${keyPrefix}ts_opposizione]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ts_status`,
                label: `Issued document ts status - [${keyPrefix}ts_status]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ts_file_id`,
                label: `Issued document ts file id - [${keyPrefix}ts_file_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ts_sent_date`,
                label: `Issued document ts sent date - [${keyPrefix}ts_sent_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}ts_full_amount`,
                label: `Issued document ts total amount - [${keyPrefix}ts_full_amount]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}imported_by`,
                label: `Issued document imported by software - [${keyPrefix}imported_by]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'show_sofort_button': bundle.inputData?.[`${keyPrefix}show_sofort_button`],
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
