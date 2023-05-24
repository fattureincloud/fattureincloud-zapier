const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Cashbook kind.',
        choices: [
            'cashbook',
            'issued_document',
            'received_document',
            'tax',
            'receipt',
        ],
    }
}
