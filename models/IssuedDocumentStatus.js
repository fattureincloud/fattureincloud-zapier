const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Issued document status - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'not_paid',
                    'paid',
                    'reversed',
                ],
            }
        )
    }
