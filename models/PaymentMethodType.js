const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Method type. - [${key}]`,
                choices: [
                    'standard',
                    'riba',
                ],
            }
        )
    }
