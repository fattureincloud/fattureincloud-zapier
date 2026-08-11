const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Client type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'company',
                    'person',
                    'pa',
                    'condo',
                ],
            }
        )
    }
