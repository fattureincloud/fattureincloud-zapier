const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `F24 status - [${key}]`,
                choices: [
                    'paid',
                    'not_paid',
                    'reversed',
                ],
            }
        )
    }
