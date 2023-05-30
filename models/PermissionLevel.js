const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Level of the permission. - [${key}]`,
                choices: [
                    'none',
                    'read',
                    'write',
                    'detailed',
                ],
            }
        )
    }
