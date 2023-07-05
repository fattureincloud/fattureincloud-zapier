const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Cashbook type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'in',
                    'out',
                ],
            }
        )
    }
