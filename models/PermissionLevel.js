const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Permission level - [${key}]`,
                choices: [
                    'none',
                    'read',
                    'write',
                    'detailed',
                ],
            }
        )
    }
