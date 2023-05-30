const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Received document type. - [${key}]`,
                choices: [
                    'expense',
                    'passive_credit_note',
                    'passive_delivery_note',
                ],
            }
        )
    }
