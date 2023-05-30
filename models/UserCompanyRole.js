const _ = require('lodash')
const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `Role of the user in this company. - [${key}]`,
                choices: [
                    'master',
                    'subaccount',
                    'employee',
                ],
            }
        )
    }
