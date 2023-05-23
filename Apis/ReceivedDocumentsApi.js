const CreateReceivedDocumentRequest = require('../Models/CreateReceivedDocumentRequest').fields;
const CreateReceivedDocumentRequestMapping = require('../Models/CreateReceivedDocumentRequest').mapping;
const CreateReceivedDocumentResponse = require('../Models/CreateReceivedDocumentResponse').fields;
const GetExistingReceivedDocumentTotalsRequest = require('../Models/GetExistingReceivedDocumentTotalsRequest').fields;
const GetExistingReceivedDocumentTotalsRequestMapping = require('../Models/GetExistingReceivedDocumentTotalsRequest').mapping;
const GetExistingReceivedDocumentTotalsResponse = require('../Models/GetExistingReceivedDocumentTotalsResponse').fields;
const GetNewReceivedDocumentTotalsRequest = require('../Models/GetNewReceivedDocumentTotalsRequest').fields;
const GetNewReceivedDocumentTotalsRequestMapping = require('../Models/GetNewReceivedDocumentTotalsRequest').mapping;
const GetNewReceivedDocumentTotalsResponse = require('../Models/GetNewReceivedDocumentTotalsResponse').fields;
const GetReceivedDocumentResponse = require('../Models/GetReceivedDocumentResponse').fields;
const GetReceivedDocumentPreCreateInfoResponse = require('../Models/GetReceivedDocumentPreCreateInfoResponse').fields;
const ListReceivedDocumentsResponse = require('../Models/ListReceivedDocumentsResponse').fields;
const ModifyReceivedDocumentRequest = require('../Models/ModifyReceivedDocumentRequest').fields;
const ModifyReceivedDocumentRequestMapping = require('../Models/ModifyReceivedDocumentRequest').mapping;
const ModifyReceivedDocumentResponse = require('../Models/ModifyReceivedDocumentResponse').fields;
const UploadReceivedDocumentAttachmentResponse = require('../Models/UploadReceivedDocumentAttachmentResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createReceivedDocument: {
        key: 'createReceivedDocument',
        noun: 'Create Received Document',
        display: {
            label: 'createReceivedDocument',
            description: 'Creates a new document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                ...CreateReceivedDocumentRequest(),
            ],
            outputFields: [
                ...CreateReceivedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateReceivedDocumentRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    deleteReceivedDocument: {
        key: 'deleteReceivedDocument',
        noun: 'Delete Received Document',
        display: {
            label: 'deleteReceivedDocument',
            description: 'Deletes the specified document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    deleteReceivedDocumentAttachment: {
        key: 'deleteReceivedDocumentAttachment',
        noun: 'Delete Received Document Attachment',
        display: {
            label: 'deleteReceivedDocumentAttachment',
            description: 'Removes the attachment of the specified document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}/attachment'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    getExistingReceivedDocumentTotals: {
        key: 'getExistingReceivedDocumentTotals',
        noun: 'Get Existing Received Document Totals',
        display: {
            label: 'getExistingReceivedDocumentTotals',
            description: 'Returns the totals for the specified document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                },
                ...GetExistingReceivedDocumentTotalsRequest(),
            ],
            outputFields: [
                ...GetExistingReceivedDocumentTotalsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}/totals'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GetExistingReceivedDocumentTotalsRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    getNewReceivedDocumentTotals: {
        key: 'getNewReceivedDocumentTotals',
        noun: 'Get New Received Document Totals',
        display: {
            label: 'getNewReceivedDocumentTotals',
            description: 'Returns the totals for a new document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                ...GetNewReceivedDocumentTotalsRequest(),
            ],
            outputFields: [
                ...GetNewReceivedDocumentTotalsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/totals'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GetNewReceivedDocumentTotalsRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    getReceivedDocument: {
        key: 'getReceivedDocument',
        noun: 'Get Received Document',
        display: {
            label: 'getReceivedDocument',
            description: 'Gets the specified document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                },
                {
                    key: 'fields',
                    label: 'List of comma-separated fields.',
                    type: 'string',
                },
                {
                    key: 'fieldset',
                    label: 'Name of the fieldset.',
                    type: 'string',
                    choices: [
                        'basic',
                        'detailed',
                    ],
                },
            ],
            outputFields: [
                ...GetReceivedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                        'fields': bundle.inputData?.['fields'],
                        'fieldset': bundle.inputData?.['fieldset'],
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    getReceivedDocumentPreCreateInfo: {
        key: 'getReceivedDocumentPreCreateInfo',
        noun: 'Get Received Document Pre-Create Info',
        display: {
            label: 'getReceivedDocumentPreCreateInfo',
            description: 'Retrieves the information useful while creating a new document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'type',
                    label: 'The type of the received document.',
                    type: 'string',
                    choices: [
                        'expense',
                        'passive_credit_note',
                        'passive_delivery_note',
                    ],
                },
            ],
            outputFields: [
                ...GetReceivedDocumentPreCreateInfoResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/info'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                        'type': bundle.inputData?.['type'],
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    listReceivedDocuments: {
        key: 'listReceivedDocuments',
        noun: 'List Received Documents',
        display: {
            label: 'listReceivedDocuments',
            description: 'Lists the received documents.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'type',
                    label: 'The type of the received document.',
                    type: 'string',
                    choices: [
                        'expense',
                        'passive_credit_note',
                        'passive_delivery_note',
                    ],
                },
                {
                    key: 'fields',
                    label: 'List of comma-separated fields.',
                    type: 'string',
                },
                {
                    key: 'fieldset',
                    label: 'Name of the fieldset.',
                    type: 'string',
                    choices: [
                        'basic',
                        'detailed',
                    ],
                },
                {
                    key: 'sort',
                    label: 'List of comma-separated fields for result sorting (minus for desc sorting).',
                    type: 'string',
                },
                {
                    key: 'page',
                    label: 'The page to retrieve.',
                    type: 'integer',
                },
                {
                    key: 'per_page',
                    label: 'The size of the page.',
                    type: 'integer',
                },
                {
                    key: 'q',
                    label: 'Query for filtering the results.',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ListReceivedDocumentsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                        'type': bundle.inputData?.['type'],
                        'fields': bundle.inputData?.['fields'],
                        'fieldset': bundle.inputData?.['fieldset'],
                        'sort': bundle.inputData?.['sort'],
                        'page': bundle.inputData?.['page'],
                        'per_page': bundle.inputData?.['per_page'],
                        'q': bundle.inputData?.['q'],
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    modifyReceivedDocument: {
        key: 'modifyReceivedDocument',
        noun: 'Modify Received Document',
        display: {
            label: 'modifyReceivedDocument',
            description: 'Modifies the specified document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                },
                ...ModifyReceivedDocumentRequest(),
            ],
            outputFields: [
                ...ModifyReceivedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ModifyReceivedDocumentRequestMapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
    uploadReceivedDocumentAttachment: {
        key: 'uploadReceivedDocumentAttachment',
        noun: 'Upload Received Document Attachment',
        display: {
            label: 'uploadReceivedDocumentAttachment',
            description: 'Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'company_id',
                    label: 'The ID of the company.',
                    type: 'integer',
                },
                {
                    key: 'filename',
                    label: 'Name of the file.',
                    type: 'string',
                },
                {
                    key: 'attachment',
                    label: 'Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx',
                    type: 'file',
                },
            ],
            outputFields: [
                ...UploadReceivedDocumentAttachmentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/attachment'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            }
        }
    },
}