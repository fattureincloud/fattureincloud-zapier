const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Issued document type - [${key}]`,
                choices: [
                    'invoice',
                    'quote',
                    'proforma',
                    'receipt',
                    'delivery_note',
                    'credit_note',
                    'order',
                    'work_report',
                    'supplier_order',
                    'self_own_invoice',
                    'self_supplier_invoice',
                ],
            }
        )
    }
