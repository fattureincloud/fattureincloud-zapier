module.exports = {
    "CreateWebhooksSubscriptionResponseSample": 
        {"data":{"id":"SUB123","sink":"http://www.test.com","verified":true,"types":["it.fattureincloud.webhooks.entities.create","it.fattureincloud.webhooks.issued_documents.create"]},"warnings":"The 'it.fattureincloud.webhooks.entities.clients.delete' event is already registered for this application"},
    "GetWebhooksSubscriptionResponseSample": 
        {"data":{"id":"SUB123","sink":"https://test.url","verified":true,"types":["it.fattureincloud.webhooks.issued_documents.invoices.create"]}},
    "ListWebhooksSubscriptionsResponseSample": 
        {"data":[{"id":"SUB12345","sink":"https://www.testurl.com/endpoint","verified":true,"types":["it.fattureincloud.webhooks.issued_documents.create","it.fattureincloud.webhooks.issued_documents.update"]},{"id":"SUB12346","sink":"https://www.testurl.com/endpoint2","verified":true,"types":["it.fattureincloud.webhooks.issued_documents.delete"]}]},
    "ModifyWebhooksSubscriptionResponseSample": 
        {"data":{"id":"SUB12345","sink":"http://www.test.com","verified":true,"types":["it.fattureincloud.webhooks.entities.create","it.fattureincloud.webhooks.issued_documents.create"]},"warnings":"The 'it.fattureincloud.webhooks.entities.clients.delete' event is already registered for this application"},
}
