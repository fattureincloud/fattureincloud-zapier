const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment account type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'standard',
                    'bank',
                ],
            }
        )
    }
