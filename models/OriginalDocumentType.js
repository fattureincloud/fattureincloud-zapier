const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Type of document followed by the the current invoice. - [${key}]`,
                choices: [
                    'ordine',
                    'contratto',
                    'convenzione',
                ],
            }
        )
    }
