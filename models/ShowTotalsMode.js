const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Show totals mode - [${key}]`,
                choices: [
                    'none',
                    'nets',
                    'all',
                ],
            }
        )
    }
