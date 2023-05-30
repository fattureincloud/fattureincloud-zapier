const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Vat kind (esigibilità IVA). - [${key}]`,
                choices: [
                    '',
                    'I',
                    'D',
                    'S',
                ],
            }
        )
    }
