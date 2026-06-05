const utils = require('../utils/utils');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}price`,
        label: `[${labelPrefix}price]`,
        type: 'number',
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      price: bundle.inputData?.[`${keyPrefix}price`],
    };
  },
};
