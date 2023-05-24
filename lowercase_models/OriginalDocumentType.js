const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Type of document followed by the the current invoice.',
        choices: [
            'ordine',
            'contratto',
            'convenzione',
        ],
    }
}
