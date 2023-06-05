const ArchiveApi = require("../apis/ArchiveApi");
const CashbookApi = require("../apis/CashbookApi");
const ClientsApi = require("../apis/ClientsApi");
const IssuedDocumentsApi = require("../apis/IssuedDocumentsApi");
const ProductsApi = require("../apis/ProductsApi");
const ReceiptsApi = require("../apis/ReceiptsApi");
const ReceivedDocumentsApi = require("../apis/ReceivedDocumentsApi");
const SuppliersApi = require("../apis/SuppliersApi");
const TaxesApi = require("../apis/TaxesApi");

const resourcesOperations = {
    'entities.clients': {
        'getOperation': ClientsApi.getClient,
        'listOperation': ClientsApi.listClients,
        'resourceKeyId': 'client_id',
    },
    'entities.suppliers': {
        'getOperation': SuppliersApi.getSupplier,
        'listOperation': SuppliersApi.listSuppliers,
        'resourceKeyId': 'supplier_id',
    },
    'products': {
        'getOperation': ProductsApi.getProduct,
        'listOperation': ProductsApi.listProducts,
        'resourceKeyId': 'product_id',
    },
    'receipts': {
        'getOperation': ReceiptsApi.getReceipt,
        'listOperation': ReceiptsApi.listReceipts,
        'resourceKeyId': 'document_id',
    },
    'archive_documents': {
        'getOperation': ArchiveApi.getArchiveDocument,
        'listOperation': ArchiveApi.listArchiveDocuments,
        'resourceKeyId': 'document_id',
    },
    'taxes': {
        'getOperation': TaxesApi.getF24,
        'listOperation': TaxesApi.listF24,
        'resourceKeyId': 'document_id',
    },
    'cashbook': {
        'getOperation': CashbookApi.getCashbookEntry,
        'listOperation': CashbookApi.listCashbookEntries,
        'resourceKeyId': 'document_id',
    },
    'issued_documents': {
        'getOperation': IssuedDocumentsApi.getIssuedDocument,
        'listOperation': IssuedDocumentsApi.listIssuedDocuments,
        'resourceKeyId': 'document_id',
    },
    'received_documents': {
        'getOperation': ReceivedDocumentsApi.getReceivedDocument,
        'listOperation': ReceivedDocumentsApi.listReceivedDocuments,
        'resourceKeyId': 'document_id',
    },
}

module.exports = {
    getWebhooksOperation: (resource) => {
        if(resource.split('.')[0] == 'issued_documents') resource = 'issued_documents'
        return resourcesOperations[resource]
    },
    getDefaultGetOperationParams: (resource) => {
        let defaults = {};
        if (resource.split('.')[0] == 'issued_documents') {
            defaults['type'] = resource.split('.')[1].slice(0, -1)
        } else if (resource == 'received_documents') {
            defaults['type'] = 'expense'
        }else if (resource == 'cashbook') {
            defaults['date_from'] = '2020-10-10'
            defaults['date_to'] = '2030-10-10'
        }

        return defaults;
    }
}