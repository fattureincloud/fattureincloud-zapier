const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Email recipient status.',
        choices: [
            'unknown',
            'document_opened',
            'email_opened',
        ],
    }
}
