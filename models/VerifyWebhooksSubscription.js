const utils = require('../utils/utils');
const WebhooksSubscriptionVerificationMethod = require('../models/WebhooksSubscriptionVerificationMethod');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}id`,
        label: `Webhooks subscription id - [${labelPrefix}id]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}verification_method`,
        ...WebhooksSubscriptionVerificationMethod.fields(
          `${keyPrefix}verification_method`,
          isInput
        ),
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      id: bundle.inputData?.[`${keyPrefix}id`],
      verification_method: bundle.inputData?.[`${keyPrefix}verification_method`],
    };
  },
};
