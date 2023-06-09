const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Cashbook type - [${key}]`,
                choices: [
                    'in',
                    'out',
                ],
            }
        )
    }
