const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Payment method type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'standard',
                    'riba',
                ],
            }
        )
    }
