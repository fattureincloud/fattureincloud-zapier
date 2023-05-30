const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Entity type. - [${key}]`,
                choices: [
                    'company',
                    'person',
                    'pa',
                    'condo',
                ],
            }
        )
    }
