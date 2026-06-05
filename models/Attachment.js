const utils = require('../utils/utils');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}filename`,
        label: `Attachment file name - [${labelPrefix}filename]`,
        type: 'string',
      },
      {
        key: `${keyPrefix}attachment`,
        label: `Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx] - [${labelPrefix}attachment]`,
        type: 'file',
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      filename: bundle.inputData?.[`${keyPrefix}filename`],
      attachment: bundle.inputData?.[`${keyPrefix}attachment`],
    };
  },
};
