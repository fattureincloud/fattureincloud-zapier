const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Cashbook kind. - [${key}]`,
                choices: [
                    'cashbook',
                    'issued_document',
                    'received_document',
                    'tax',
                    'receipt',
                ],
            }
        )
    }
