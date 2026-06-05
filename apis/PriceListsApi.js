const samples = require('../samples/PriceListsApi');
const AnyType = require('../models/AnyType');
const GetPriceListItemsResponse = require('../models/GetPriceListItemsResponse');
const ListPriceListsResponse = require('../models/ListPriceListsResponse');
const utils = require('../utils/utils');

module.exports = {
  getPriceListItems: {
    key: 'getPriceListItems',
    noun: 'PriceLists',
    display: {
      label: 'Get PriceList Items List',
      description: 'Retrieves all the Items of a PriceList',
      hidden: false,
    },
    operation: {
      inputFields: [
        {
          key: 'company_id',
          dynamic: 'listUserCompaniesTrigger.id.name',
          label: 'The ID of the company.',
          type: 'integer',
          required: true,
        },
        {
          key: 'price_list_id',
          label: 'The price list ID',
          type: 'string',
          required: true,
        },
      ],
      outputFields: [...GetPriceListItemsResponse.fields('', false)],
      perform: async (z, bundle) => {
        const options = {
          url: utils.replacePathParameters(
            'https://api-v2.fattureincloud.it/c/{company_id}/price_lists/{price_list_id}/items'
          ),
          method: 'GET',
          removeMissingValuesFrom: { params: true, body: true },
          headers: {
            'Content-Type': '',
            Accept: 'application/json',
          },
          params: {},
          body: {},
        };
        return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
          response.throwForStatus();
          const results = utils.responseOptionsMiddleware(
            z,
            bundle,
            'getPriceListItems',
            response.json
          );
          return results;
        });
      },
      sample: samples['GetPriceListItemsResponseSample'],
    },
  },
  getPriceLists: {
    key: 'getPriceLists',
    noun: 'PriceLists',
    display: {
      label: 'Get PriceLists',
      description: 'Retrieves all price lists of the company',
      hidden: false,
    },
    operation: {
      inputFields: [
        {
          key: 'company_id',
          dynamic: 'listUserCompaniesTrigger.id.name',
          label: 'The ID of the company.',
          type: 'integer',
          required: true,
        },
      ],
      outputFields: [...ListPriceListsResponse.fields('', false)],
      perform: async (z, bundle) => {
        const options = {
          url: utils.replacePathParameters(
            'https://api-v2.fattureincloud.it/c/{company_id}/price_lists'
          ),
          method: 'GET',
          removeMissingValuesFrom: { params: true, body: true },
          headers: {
            'Content-Type': '',
            Accept: 'application/json',
          },
          params: {},
          body: {},
        };
        return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
          response.throwForStatus();
          const results = utils.responseOptionsMiddleware(
            z,
            bundle,
            'getPriceLists',
            response.json
          );
          return results;
        });
      },
      sample: samples['ListPriceListsResponseSample'],
    },
  },
};
