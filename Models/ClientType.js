const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Client type.',
        choices: [
            'company',
            'person',
            'pa',
            'condo',
        ],
    }
}
