const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Show totals mode - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'none',
                    'nets',
                    'all',
                ],
            }
        )
    }
