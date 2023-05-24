const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Payment terms Type.',
        choices: [
            'standard',
            'end_of_month',
        ],
    }
}
