const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Email recipient status - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'unknown',
                    'document_opened',
                    'email_opened',
                ],
            }
        )
    }
