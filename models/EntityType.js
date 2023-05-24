const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Entity type.',
        choices: [
            'company',
            'person',
            'pa',
            'condo',
        ],
    }
}
