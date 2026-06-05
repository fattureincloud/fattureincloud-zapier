const utils = require('../utils/utils');
const PendingReceivedDocument = require('../models/PendingReceivedDocument');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [...PendingReceivedDocument.fields(`${keyPrefix}data`, isInput)];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      data: utils.removeIfEmpty(PendingReceivedDocument.mapping(bundle, `${keyPrefix}data`)),
    };
  },
};
