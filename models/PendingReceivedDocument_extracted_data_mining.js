const utils = require('../utils/utils');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}save_entity`,
        label: `[${labelPrefix}save_entity]`,
        type: 'boolean',
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      save_entity: bundle.inputData?.[`${keyPrefix}save_entity`],
    };
  },
};
