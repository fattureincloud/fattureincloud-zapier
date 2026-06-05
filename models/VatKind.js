const utils = require('../utils/utils');

module.exports = {
  fields: (key) => ({
    label: `Vat kind [esigibilità IVA] - [${key.replaceAll('__', '.')}]`,
    choices: ['', 'I', 'D', 'S'],
  }),
};
