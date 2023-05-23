const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Receipt type.',
        choices: [
            'till_receipt',
            'sales_receipt',
        ],
    }
}
