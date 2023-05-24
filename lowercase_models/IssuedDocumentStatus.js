const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Payment status.',
        choices: [
            'not_paid',
            'paid',
            'reversed',
        ],
    }
}
