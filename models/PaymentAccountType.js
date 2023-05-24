const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Payment account type.',
        choices: [
            'standard',
            'bank',
        ],
    }
}
