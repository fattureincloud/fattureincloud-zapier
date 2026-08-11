const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Template type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'standard',
                    'delivery_note',
                    'accompanying_invoice',
                ],
            }
        )
    }
