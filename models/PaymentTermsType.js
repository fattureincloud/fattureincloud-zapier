const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment terms type - [${key}]`,
                choices: [
                    'standard',
                    'end_of_month',
                ],
            }
        )
    }
