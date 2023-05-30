const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Company type. - [${key}]`,
                choices: [
                    'company',
                    'accountant',
                ],
            }
        )
    }
