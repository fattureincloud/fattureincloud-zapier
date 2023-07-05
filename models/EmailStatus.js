const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Email status - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'sending',
                    'pending',
                    'sent',
                ],
            }
        )
    }
