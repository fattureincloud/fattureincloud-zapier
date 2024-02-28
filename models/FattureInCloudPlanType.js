const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Fatture in Cloud account plan type. - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'trial',
                    'standard',
                    'premium',
                    'premium_plus',
                    'complete',
                ],
            }
        )
    }
