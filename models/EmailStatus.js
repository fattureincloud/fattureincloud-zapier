const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Email status. - [${key}]`,
                choices: [
                    'sending',
                    'pending',
                    'sent',
                ],
            }
        )
    }
