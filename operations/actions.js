const ArchiveApi = require('../apis/ArchiveApi');
const CashbookApi = require('../apis/CashbookApi');
const ClientsApi = require('../apis/ClientsApi');
const CompaniesApi = require('../apis/CompaniesApi');
const EmailsApi = require('../apis/EmailsApi');
const InfoApi = require('../apis/InfoApi');
const IssuedDocumentsApi = require('../apis/IssuedDocumentsApi');
const IssuedEInvoicesApi = require('../apis/IssuedEInvoicesApi');
const ProductsApi = require('../apis/ProductsApi');
const ReceiptsApi = require('../apis/ReceiptsApi');
const ReceivedDocumentsApi = require('../apis/ReceivedDocumentsApi');
const SettingsApi = require('../apis/SettingsApi');
const SuppliersApi = require('../apis/SuppliersApi');
const TaxesApi = require('../apis/TaxesApi');
const UserApi = require('../apis/UserApi');
const WebhooksApi = require('../apis/WebhooksApi');
const { extractDataMiddleware } = require('../utils/utils');

const actions = {
    [ArchiveApi.createArchiveDocument.key]: ArchiveApi.createArchiveDocument,
    [ArchiveApi.deleteArchiveDocument.key]: ArchiveApi.deleteArchiveDocument,
    [ArchiveApi.getArchiveDocument.key]: ArchiveApi.getArchiveDocument,
    [ArchiveApi.listArchiveDocuments.key]: ArchiveApi.listArchiveDocuments,
    [ArchiveApi.modifyArchiveDocument.key]: ArchiveApi.modifyArchiveDocument,
    [ArchiveApi.uploadArchiveDocumentAttachment.key]: ArchiveApi.uploadArchiveDocumentAttachment,
    [CashbookApi.createCashbookEntry.key]: CashbookApi.createCashbookEntry,
    [CashbookApi.deleteCashbookEntry.key]: CashbookApi.deleteCashbookEntry,
    [CashbookApi.getCashbookEntry.key]: CashbookApi.getCashbookEntry,
    [CashbookApi.listCashbookEntries.key]: CashbookApi.listCashbookEntries,
    [CashbookApi.modifyCashbookEntry.key]: CashbookApi.modifyCashbookEntry,
    [ClientsApi.createClient.key]: ClientsApi.createClient,
    [ClientsApi.deleteClient.key]: ClientsApi.deleteClient,
    [ClientsApi.getClient.key]: ClientsApi.getClient,
    [ClientsApi.listClients.key]: ClientsApi.listClients,
    [ClientsApi.modifyClient.key]: ClientsApi.modifyClient,
    [CompaniesApi.getCompanyInfo.key]: CompaniesApi.getCompanyInfo,
    [EmailsApi.listEmails.key]: EmailsApi.listEmails,
    [InfoApi.listArchiveCategories.key]: InfoApi.listArchiveCategories,
    [InfoApi.listCities.key]: InfoApi.listCities, // unused
    [InfoApi.listCostCenters.key]: InfoApi.listCostCenters, // unused
    [InfoApi.listCountries.key]: InfoApi.listCountries, // unused
    [InfoApi.listCurrencies.key]: InfoApi.listCurrencies, // unused
    [InfoApi.listDeliveryNotesDefaultCausals.key]: InfoApi.listDeliveryNotesDefaultCausals, // unused
    [InfoApi.listDetailedCountries.key]: InfoApi.listDetailedCountries, // unused
    [InfoApi.listLanguages.key]: InfoApi.listLanguages, // unused
    [InfoApi.listPaymentAccounts.key]: InfoApi.listPaymentAccounts,
    [InfoApi.listPaymentMethods.key]: InfoApi.listPaymentMethods,
    [InfoApi.listProductCategories.key]: InfoApi.listProductCategories,
    [InfoApi.listReceivedDocumentCategories.key]: InfoApi.listReceivedDocumentCategories,
    [InfoApi.listRevenueCenters.key]: InfoApi.listRevenueCenters,
    [InfoApi.listTemplates.key]: InfoApi.listTemplates,
    [InfoApi.listUnitsOfMeasure.key]: InfoApi.listUnitsOfMeasure, // unused
    [InfoApi.listVatTypes.key]: InfoApi.listVatTypes,
    [IssuedDocumentsApi.createIssuedDocument.key]: IssuedDocumentsApi.createIssuedDocument,
    [IssuedDocumentsApi.deleteIssuedDocument.key]: IssuedDocumentsApi.deleteIssuedDocument,
    [IssuedDocumentsApi.deleteIssuedDocumentAttachment.key]: IssuedDocumentsApi.deleteIssuedDocumentAttachment,
    [IssuedDocumentsApi.getEmailData.key]: IssuedDocumentsApi.getEmailData,
    [IssuedDocumentsApi.getExistingIssuedDocumentTotals.key]: IssuedDocumentsApi.getExistingIssuedDocumentTotals,
    [IssuedDocumentsApi.getIssuedDocument.key]: IssuedDocumentsApi.getIssuedDocument,
    [IssuedDocumentsApi.getIssuedDocumentPreCreateInfo.key]: IssuedDocumentsApi.getIssuedDocumentPreCreateInfo,
    [IssuedDocumentsApi.getNewIssuedDocumentTotals.key]: IssuedDocumentsApi.getNewIssuedDocumentTotals,
    [IssuedDocumentsApi.joinIssuedDocuments.key]: IssuedDocumentsApi.joinIssuedDocuments,
    [IssuedDocumentsApi.listIssuedDocuments.key]: IssuedDocumentsApi.listIssuedDocuments,
    [IssuedDocumentsApi.modifyIssuedDocument.key]: IssuedDocumentsApi.modifyIssuedDocument,
    [IssuedDocumentsApi.scheduleEmail.key]: IssuedDocumentsApi.scheduleEmail,
    [IssuedDocumentsApi.transformIssuedDocument.key]: IssuedDocumentsApi.transformIssuedDocument,
    [IssuedDocumentsApi.uploadIssuedDocumentAttachment.key]: IssuedDocumentsApi.uploadIssuedDocumentAttachment,
    [IssuedEInvoicesApi.getEInvoiceRejectionReason.key]: IssuedEInvoicesApi.getEInvoiceRejectionReason,
    [IssuedEInvoicesApi.getEInvoiceXml.key]: IssuedEInvoicesApi.getEInvoiceXml,
    [IssuedEInvoicesApi.sendEInvoice.key]: IssuedEInvoicesApi.sendEInvoice,
    [IssuedEInvoicesApi.verifyEInvoiceXml.key]: IssuedEInvoicesApi.verifyEInvoiceXml,
    [ProductsApi.createProduct.key]: ProductsApi.createProduct,
    [ProductsApi.deleteProduct.key]: ProductsApi.deleteProduct,
    [ProductsApi.getProduct.key]: ProductsApi.getProduct,
    [ProductsApi.listProducts.key]: ProductsApi.listProducts,
    [ProductsApi.modifyProduct.key]: ProductsApi.modifyProduct,
    [ReceiptsApi.createReceipt.key]: ReceiptsApi.createReceipt,
    [ReceiptsApi.deleteReceipt.key]: ReceiptsApi.deleteReceipt,
    [ReceiptsApi.getReceipt.key]: ReceiptsApi.getReceipt,
    [ReceiptsApi.getReceiptPreCreateInfo.key]: ReceiptsApi.getReceiptPreCreateInfo,
    [ReceiptsApi.getReceiptsMonthlyTotals.key]: ReceiptsApi.getReceiptsMonthlyTotals,
    [ReceiptsApi.listReceipts.key]: ReceiptsApi.listReceipts,
    [ReceiptsApi.modifyReceipt.key]: ReceiptsApi.modifyReceipt,
    [ReceivedDocumentsApi.createReceivedDocument.key]: ReceivedDocumentsApi.createReceivedDocument,
    [ReceivedDocumentsApi.deleteReceivedDocument.key]: ReceivedDocumentsApi.deleteReceivedDocument,
    [ReceivedDocumentsApi.deleteReceivedDocumentAttachment.key]: ReceivedDocumentsApi.deleteReceivedDocumentAttachment,
    [ReceivedDocumentsApi.getExistingReceivedDocumentTotals.key]: ReceivedDocumentsApi.getExistingReceivedDocumentTotals,
    [ReceivedDocumentsApi.getNewReceivedDocumentTotals.key]: ReceivedDocumentsApi.getNewReceivedDocumentTotals,
    [ReceivedDocumentsApi.getReceivedDocument.key]: ReceivedDocumentsApi.getReceivedDocument,
    [ReceivedDocumentsApi.getReceivedDocumentPreCreateInfo.key]: ReceivedDocumentsApi.getReceivedDocumentPreCreateInfo,
    [ReceivedDocumentsApi.listReceivedDocuments.key]: ReceivedDocumentsApi.listReceivedDocuments,
    [ReceivedDocumentsApi.modifyReceivedDocument.key]: ReceivedDocumentsApi.modifyReceivedDocument,
    [ReceivedDocumentsApi.uploadReceivedDocumentAttachment.key]: ReceivedDocumentsApi.uploadReceivedDocumentAttachment,
    [SettingsApi.createPaymentAccount.key]: SettingsApi.createPaymentAccount,
    [SettingsApi.createPaymentMethod.key]: SettingsApi.createPaymentMethod,
    [SettingsApi.createVatType.key]: SettingsApi.createVatType,
    [SettingsApi.deletePaymentAccount.key]: SettingsApi.deletePaymentAccount,
    [SettingsApi.deletePaymentMethod.key]: SettingsApi.deletePaymentMethod,
    [SettingsApi.deleteVatType.key]: SettingsApi.deleteVatType,
    [SettingsApi.getPaymentAccount.key]: SettingsApi.getPaymentAccount,
    [SettingsApi.getPaymentMethod.key]: SettingsApi.getPaymentMethod,
    [SettingsApi.getVatType.key]: SettingsApi.getVatType,
    [SettingsApi.modifyPaymentAccount.key]: SettingsApi.modifyPaymentAccount,
    [SettingsApi.modifyPaymentMethod.key]: SettingsApi.modifyPaymentMethod,
    [SettingsApi.modifyVatType.key]: SettingsApi.modifyVatType,
    [SuppliersApi.createSupplier.key]: SuppliersApi.createSupplier,
    [SuppliersApi.deleteSupplier.key]: SuppliersApi.deleteSupplier,
    [SuppliersApi.getSupplier.key]: SuppliersApi.getSupplier,
    [SuppliersApi.listSuppliers.key]: SuppliersApi.listSuppliers,
    [SuppliersApi.modifySupplier.key]: SuppliersApi.modifySupplier,
    [TaxesApi.createF24.key]: TaxesApi.createF24,
    [TaxesApi.deleteF24.key]: TaxesApi.deleteF24,
    [TaxesApi.deleteF24Attachment.key]: TaxesApi.deleteF24Attachment,
    [TaxesApi.getF24.key]: TaxesApi.getF24,
    [TaxesApi.listF24.key]: TaxesApi.listF24,
    [TaxesApi.modifyF24.key]: TaxesApi.modifyF24,
    [TaxesApi.uploadF24Attachment.key]: TaxesApi.uploadF24Attachment,
    [UserApi.getUserInfo.key]: UserApi.getUserInfo,
    [UserApi.listUserCompanies.key]: UserApi.listUserCompanies, // unused
    [WebhooksApi.createWebhooksSubscription.key]: WebhooksApi.createWebhooksSubscription,
    [WebhooksApi.deleteWebhooksSubscription.key]: WebhooksApi.deleteWebhooksSubscription,
    [WebhooksApi.getWebhooksSubscription.key]: WebhooksApi.getWebhooksSubscription,
    [WebhooksApi.listWebhooksSubscriptions.key]: WebhooksApi.listWebhooksSubscriptions,
    [WebhooksApi.modifyWebhooksSubscription.key]: WebhooksApi.modifyWebhooksSubscription,
}

const isSearchAction = key => key.startsWith('list')
const hasASearchField = action => action.operation.inputFields.length > 0

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasASearchField(value) ? {...actions, [key]: extractDataMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => !isSearchAction(key) ? {...actions, [key]: value} : actions, {}),
}