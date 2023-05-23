const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Received document type.',
        choices: [
            'expense',
            'passive_credit_note',
            'passive_delivery_note',
        ],
    }
}
