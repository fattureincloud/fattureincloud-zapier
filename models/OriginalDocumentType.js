const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Issued document original document type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'ordine',
                    'contratto',
                    'convenzione',
                ],
            }
        )
    }
