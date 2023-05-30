const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Tax status. - [${key}]`,
                choices: [
                    'paid',
                    'not_paid',
                    'reversed',
                ],
            }
        )
    }
