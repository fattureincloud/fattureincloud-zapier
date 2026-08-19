const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Entity type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'company',
                    'person',
                    'pa',
                    'condo',
                ],
            }
        )
    }
