const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment method type - [${key}]`,
                choices: [
                    'standard',
                    'riba',
                ],
            }
        )
    }
