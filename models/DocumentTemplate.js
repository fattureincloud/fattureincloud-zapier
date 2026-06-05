const utils = require('../utils/utils');
const TemplateType = require('../models/TemplateType');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}id`,
        label: `Template id - [${labelPrefix}id]`,
        type: 'integer',
      },
      {
        key: `${keyPrefix}privacy`,
        label: `Template privacy - [${labelPrefix}privacy]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}type`,
        ...TemplateType.fields(`${keyPrefix}type`, isInput),
      },
      {
        key: `${keyPrefix}name`,
        label: `Template name - [${labelPrefix}name]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}can_disable_watermark`,
        label: `Can disable watermark - [${labelPrefix}can_disable_watermark]`,
        type: 'boolean',
      },
      {
        key: `${keyPrefix}author`,
        label: `Template author - [${labelPrefix}author]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}content`,
        label: `Template definition content - [${labelPrefix}content]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}supports_custom_taxable`,
        label: `Supports custom taxable - [${labelPrefix}supports_custom_taxable]`,
        type: 'boolean',
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      id: bundle.inputData?.[`${keyPrefix}id`],
      privacy: bundle.inputData?.[`${keyPrefix}privacy`],
      type: bundle.inputData?.[`${keyPrefix}type`],
      name: bundle.inputData?.[`${keyPrefix}name`],
      can_disable_watermark: bundle.inputData?.[`${keyPrefix}can_disable_watermark`],
      author: bundle.inputData?.[`${keyPrefix}author`],
      content: bundle.inputData?.[`${keyPrefix}content`],
      supports_custom_taxable: bundle.inputData?.[`${keyPrefix}supports_custom_taxable`],
    };
  },
};
