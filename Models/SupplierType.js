const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Supplier type.',
        choices: [
            'company',
            'person',
            'pa',
            'condo',
        ],
    }
}
