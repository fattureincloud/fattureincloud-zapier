const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Receipt type. - [${key}]`,
                choices: [
                    'till_receipt',
                    'sales_receipt',
                ],
            }
        )
    }
