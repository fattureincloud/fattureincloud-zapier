const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Price list prices type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'net',
                    'gross',
                ],
            }
        )
    }
