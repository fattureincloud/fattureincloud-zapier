const ArchiveApi = require("../apis/ArchiveApi");
const CashbookApi = require("../apis/CashbookApi");
const ClientsApi = require("../apis/ClientsApi");
const IssuedDocumentsApi = require("../apis/IssuedDocumentsApi");
const ProductsApi = require("../apis/ProductsApi");
const ReceiptsApi = require("../apis/ReceiptsApi");
const SuppliersApi = require("../apis/SuppliersApi");
const TaxesApi = require("../apis/TaxesApi");

const resourcesGetOperations = {
    'entities.clients': {
        'operation': ClientsApi.getClient,
        'resourceKeyId': 'client_id'
    },
    'entities.suppliers': {
        'operation': SuppliersApi.getSupplier,
        'resourceKeyId': 'supplier_id'
    },
    'products': {
        'operation': ProductsApi.getProduct,
        'resourceKeyId': 'product_id'
    },
    'receipts': {
        'operation': ReceiptsApi.getReceipt,
        'resourceKeyId': 'document_id'
    },
    'archive_documents': {
        'operation': ArchiveApi.getArchiveDocument,
        'resourceKeyId': 'document_id'
    },
    'taxes': {
        'operation': TaxesApi.getF24,
        'resourceKeyId': 'document_id'
    },
    'cashbook': {
        'operation': CashbookApi.getCashbookEntry,
        'resourceKeyId': 'document_id'
    },
    'issued_documents': {
        'operation': IssuedDocumentsApi.getIssuedDocument,
        'resourceKeyId': 'document_id'
    },
}

module.exports = {
    getWebhooksOperation: (resource) => {
        if(resource.split('.')[0] == 'issued_documents') resource = 'issued_documents'
        return resourcesGetOperations[resource]
    }
}