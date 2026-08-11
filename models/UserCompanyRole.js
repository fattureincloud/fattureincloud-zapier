const utils = require('../utils/utils');

module.exports = {
        fields: (key) => (
            {
                label: `User company role - [${key.replaceAll('__', '.')}]`,
                choices: [
                    'master',
                    'subaccount',
                    'employee',
                ],
            }
        )
    }
