const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment status. - [${key}]`,
                choices: [
                    'not_paid',
                    'paid',
                    'reversed',
                ],
            }
        )
    }
