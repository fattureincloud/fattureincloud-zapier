const utils = require('../utils/utils');

module.exports = {
  fields: (key) => ({
    label: `Webhooks Subscription verification method - [${key.replaceAll('__', '.')}]`,
    choices: ['header', 'query'],
  }),
};
