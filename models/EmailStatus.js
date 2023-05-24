const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Email status.',
        choices: [
            'sending',
            'pending',
            'sent',
        ],
    }
}
