const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Company type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'company',
                    'accountant',
                ],
            }
        )
    }
