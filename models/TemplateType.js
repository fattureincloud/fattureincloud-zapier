const utils = require('../utils/utils');

module.exports = {
  fields: (key) => ({
    label: `Template type - [${key.replaceAll('__', '.')}]`,
    type: 'string',
    choices: ['standard', 'delivery_note', 'accompanying_invoice'],
  }),
};
