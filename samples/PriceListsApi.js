module.exports = {
  GetPriceListItemsResponseSample: { data: { 1: { price: 3.5 }, 2: { price: 5 } } },
  ListPriceListsResponseSample: {
    data: [
      {
        id: '10',
        name: 'listino',
        prices_type: 'net',
        is_default: true,
        valid_from: '2025-01-01',
        valid_to: '2025-12-01',
        type: 'sell',
      },
      {
        id: '11',
        name: 'listino-test',
        prices_type: 'gross',
        is_default: true,
        valid_from: '2025-01-01',
        valid_to: '2025-01-01',
        type: 'purchase',
      },
    ],
  },
};
