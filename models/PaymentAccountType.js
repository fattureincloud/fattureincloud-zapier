const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment account type. - [${key}]`,
                choices: [
                    'standard',
                    'bank',
                ],
            }
        )
    }
