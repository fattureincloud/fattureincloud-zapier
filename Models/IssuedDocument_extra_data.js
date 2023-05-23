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
                key: keyPrefix + 'show_sofort_button',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'multifatture_sent',
                
                type: 'integer',
            },
            {
                key: keyPrefix + 'ts_communication',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ts_flag_tipo_spesa',
                label: labelPrefix + '1 &#x3D;&gt; TK (Ticket di pronto soccorso); 2 &#x3D;&gt; SR (Visita in intramoenia)',
                type: 'number',
            },
            {
                key: keyPrefix + 'ts_pagamento_tracciato',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ts_tipo_spesa',
                label: labelPrefix + 'Can be [ &#39;TK&#39;, &#39;FC&#39;, &#39;FV&#39;, &#39;SV&#39;, &#39;SP&#39;, &#39;AD&#39;, &#39;AS&#39;, &#39;SR&#39;, &#39;CT&#39;, &#39;PI&#39;, &#39;IC&#39;, &#39;AA&#39; ]. Refer to the technical specifications to learn more.',
                type: 'string',
            },
            {
                key: keyPrefix + 'ts_opposizione',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'ts_status',
                
                type: 'integer',
            },
            {
                key: keyPrefix + 'ts_file_id',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'ts_sent_date',
                
                type: 'datetime',
            },
            {
                key: keyPrefix + 'ts_full_amount',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'imported_by',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'ts_single_sending',
                
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'show_sofort_button': bundle.inputData?.[keyPrefix + 'show_sofort_button'],
            'multifatture_sent': bundle.inputData?.[keyPrefix + 'multifatture_sent'],
            'ts_communication': bundle.inputData?.[keyPrefix + 'ts_communication'],
            'ts_flag_tipo_spesa': bundle.inputData?.[keyPrefix + 'ts_flag_tipo_spesa'],
            'ts_pagamento_tracciato': bundle.inputData?.[keyPrefix + 'ts_pagamento_tracciato'],
            'ts_tipo_spesa': bundle.inputData?.[keyPrefix + 'ts_tipo_spesa'],
            'ts_opposizione': bundle.inputData?.[keyPrefix + 'ts_opposizione'],
            'ts_status': bundle.inputData?.[keyPrefix + 'ts_status'],
            'ts_file_id': bundle.inputData?.[keyPrefix + 'ts_file_id'],
            'ts_sent_date': bundle.inputData?.[keyPrefix + 'ts_sent_date'],
            'ts_full_amount': bundle.inputData?.[keyPrefix + 'ts_full_amount'],
            'imported_by': bundle.inputData?.[keyPrefix + 'imported_by'],
            'ts_single_sending': bundle.inputData?.[keyPrefix + 'ts_single_sending'],
        }
    },
}
