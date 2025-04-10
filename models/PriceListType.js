const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Price list types - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'sell',
                    'purchase',
                ],
            }
        )
    }
