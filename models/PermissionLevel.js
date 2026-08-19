const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Permission level - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'none',
                    'read',
                    'write',
                    'detailed',
                ],
            }
        )
    }
