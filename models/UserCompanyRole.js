const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
    fields: {
        label: 'Role of the user in this company.',
        choices: [
            'master',
            'subaccount',
            'employee',
        ],
    }
}
