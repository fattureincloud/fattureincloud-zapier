const utils = require('../utils/utils');
const PendingReceivedDocument = require('../models/PendingReceivedDocument');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}data`,
        label: `[${labelPrefix}data]`,
        children: PendingReceivedDocument.fields(
          `${keyPrefix}data${!isInput ? '[]' : ''}`,
          isInput,
          true
        ),
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      data: utils.childMapping(
        bundle.inputData?.[`${keyPrefix}data`],
        `${keyPrefix}data`,
        PendingReceivedDocument
      ),
    };
  },
};
