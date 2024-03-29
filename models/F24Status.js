const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `F24 status - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'paid',
                    'not_paid',
                    'reversed',
                ],
            }
        )
    }
