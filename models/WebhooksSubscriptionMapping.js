const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Webhooks Subscription mapping - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'binary',
                    'structured',
                ],
            }
        )
    }
