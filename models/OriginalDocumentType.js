const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Issued document original document type - [${key}]`,
                choices: [
                    'ordine',
                    'contratto',
                    'convenzione',
                ],
            }
        )
    }
