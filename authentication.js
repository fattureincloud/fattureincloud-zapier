const UserApi = require("./apis/UserApi");

const testAuth = async (z, bundle) => {
  const userInfo = await UserApi.getUserInfo.operation.perform(z, bundle)
  return userInfo.data;
};
const scopes = [
    "situation:r",
    "entity.clients:a",
    "entity.suppliers:a",
    "products:a",
    "issued_documents.quotes:a",
    "issued_documents.proformas:a",
    "issued_documents.invoices:a",
    "issued_documents.receipts:a",
    "issued_documents.delivery_notes:a",
    "issued_documents.credit_notes:a",
    "issued_documents.orders:a",
    "issued_documents.work_reports:a",
    "issued_documents.supplier_orders:a",
    "issued_documents.self_invoices:a",
    "received_documents:a",
    "receipts:a",
    "calendar:a",
    "archive:a",
    "taxes:a",
    "stock:a",
    "emails:r",
    "cashbook:a",
    "settings:a",
]

module.exports = {
  type: 'oauth2',
  test: testAuth,
  connectionLabel: '- ',
  oauth2Config: {
    authorizeUrl: {
      url: 'https://api-v2.fattureincloud.it/oauth/authorize',
      params: {
        client_id: '',
        state: '',
        redirect_uri: '',
        response_type: 'code',
      },
    },
    getAccessToken: {
      body: {
        code: '',
        client_id: '',
        client_secret: '',
        grant_type: 'authorization_code',
        redirect_uri: '',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      method: 'POST',
      url: 'https://api-v2.fattureincloud.it/oauth/token',
    },
    refreshAccessToken: {
      body: {
        refresh_token: '',
        grant_type: 'refresh_token',
        client_id: '',
        client_secret: '',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      method: 'POST',
      url: 'https://api-v2.fattureincloud.it/oauth/token',
    },
    scope: scopes.join(' '),
    autoRefresh: true,
  },
};