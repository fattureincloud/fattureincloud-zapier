const utils = require('../utils/utils');
const PendingReceivedDocument_extracted_data_mining = require('../models/PendingReceivedDocument_extracted_data_mining');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [...PendingReceivedDocument_extracted_data_mining.fields(`${keyPrefix}mining`, isInput)];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      mining: utils.removeIfEmpty(
        PendingReceivedDocument_extracted_data_mining.mapping(bundle, `${keyPrefix}mining`)
      ),
    };
  },
};
