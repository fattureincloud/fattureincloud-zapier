const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Pending received document type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'agyo',
                    'mail',
                    'browser',
                ],
            }
        )
    }
