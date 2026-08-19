const utils = require('../utils/utils');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);

    return [
      {
        key: `${keyPrefix}value`,
        label: `Any value (stringified when needed) - [${labelPrefix}value]`,
        type: 'string',
        required: false,
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return bundle.inputData?.[`${keyPrefix}value`];
  },
};
