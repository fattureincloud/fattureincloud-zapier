const utils = require('../utils/utils');
const PaymentAccount = require('../models/PaymentAccount');
const PaymentMethod = require('../models/PaymentMethod');
const PriceList = require('../models/PriceList');
const VatType = require('../models/VatType');

module.exports = {
  fields: (prefix = '', isInput = true, isArrayChild = false) => {
    const { keyPrefix, labelPrefix } = utils.buildKeyAndLabel(prefix, isInput, isArrayChild);
    return [
      {
        key: `${keyPrefix}countries_list`,
        label: `Countries list - [${labelPrefix}countries_list]`,
        list: true,
        type: 'string',
      },
      {
        key: `${keyPrefix}payment_methods_list`,
        label: `[${labelPrefix}payment_methods_list]`,
        children: PaymentMethod.fields(
          `${keyPrefix}payment_methods_list${!isInput ? '[]' : ''}`,
          isInput,
          true
        ),
      },
      {
        key: `${keyPrefix}payment_accounts_list`,
        label: `[${labelPrefix}payment_accounts_list]`,
        children: PaymentAccount.fields(
          `${keyPrefix}payment_accounts_list${!isInput ? '[]' : ''}`,
          isInput,
          true
        ),
      },
      {
        key: `${keyPrefix}vat_types_list`,
        label: `[${labelPrefix}vat_types_list]`,
        children: VatType.fields(
          `${keyPrefix}vat_types_list${!isInput ? '[]' : ''}`,
          isInput,
          true
        ),
      },
      {
        key: `${keyPrefix}price_lists`,
        label: `[${labelPrefix}price_lists]`,
        children: PriceList.fields(`${keyPrefix}price_lists${!isInput ? '[]' : ''}`, isInput, true),
      },
      {
        key: `${keyPrefix}limit`,
        label: `Entity limit - [${labelPrefix}limit]`,
        type: 'number',
      },
      {
        key: `${keyPrefix}usage`,
        label: `Entity usage - [${labelPrefix}usage]`,
        type: 'number',
      },
    ];
  },
  mapping: (bundle, prefix = '') => {
    const { keyPrefix } = utils.buildKeyAndLabel(prefix);
    return {
      countries_list: bundle.inputData?.[`${keyPrefix}countries_list`],
      payment_methods_list: utils.childMapping(
        bundle.inputData?.[`${keyPrefix}payment_methods_list`],
        `${keyPrefix}payment_methods_list`,
        PaymentMethod
      ),
      payment_accounts_list: utils.childMapping(
        bundle.inputData?.[`${keyPrefix}payment_accounts_list`],
        `${keyPrefix}payment_accounts_list`,
        PaymentAccount
      ),
      vat_types_list: utils.childMapping(
        bundle.inputData?.[`${keyPrefix}vat_types_list`],
        `${keyPrefix}vat_types_list`,
        VatType
      ),
      price_lists: utils.childMapping(
        bundle.inputData?.[`${keyPrefix}price_lists`],
        `${keyPrefix}price_lists`,
        PriceList
      ),
      limit: bundle.inputData?.[`${keyPrefix}limit`],
      usage: bundle.inputData?.[`${keyPrefix}usage`],
    };
  },
};
