const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Receipt type - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'till_receipt',
                    'sales_receipt',
                ],
            }
        )
    }
