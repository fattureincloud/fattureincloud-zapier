const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Level of the permission.',
        choices: [
            'none',
            'read',
            'write',
            'detailed',
        ],
    }
}
