const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `User company role - [${key}]`,
                choices: [
                    'master',
                    'subaccount',
                    'employee',
                ],
            }
        )
    }
