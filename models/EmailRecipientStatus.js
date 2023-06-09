const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Email recipient status - [${key}]`,
                choices: [
                    'unknown',
                    'document_opened',
                    'email_opened',
                ],
            }
        )
    }
