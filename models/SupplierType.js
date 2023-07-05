const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Supplier type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'company',
                    'person',
                    'pa',
                    'condo',
                ],
            }
        )
    }
