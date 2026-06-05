const utils = require('../utils/utils');
const EntityClientPreCreateInfo = require('../models/EntityClientPreCreateInfo');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [...EntityClientPreCreateInfo.fields(`${keyPrefix}data`, isInput)];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      data: utils.removeIfEmpty(EntityClientPreCreateInfo.mapping(bundle, `${keyPrefix}data`)),
    };
  },
};
