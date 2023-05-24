const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Tax status.',
        choices: [
            'paid',
            'not_paid',
            'reversed',
        ],
    }
}
