const CreateIssuedDocumentRequest = require('../models/CreateIssuedDocumentRequest').fields;
const CreateIssuedDocumentRequestMapping = require('../models/CreateIssuedDocumentRequest').mapping;
const CreateIssuedDocumentResponse = require('../models/CreateIssuedDocumentResponse').fields;
const GetEmailDataResponse = require('../models/GetEmailDataResponse').fields;
const GetExistingIssuedDocumentTotalsRequest = require('../models/GetExistingIssuedDocumentTotalsRequest').fields;
const GetExistingIssuedDocumentTotalsRequestMapping = require('../models/GetExistingIssuedDocumentTotalsRequest').mapping;
const GetExistingIssuedDocumentTotalsResponse = require('../models/GetExistingIssuedDocumentTotalsResponse').fields;
const GetIssuedDocumentResponse = require('../models/GetIssuedDocumentResponse').fields;
const GetIssuedDocumentPreCreateInfoResponse = require('../models/GetIssuedDocumentPreCreateInfoResponse').fields;
const GetNewIssuedDocumentTotalsRequest = require('../models/GetNewIssuedDocumentTotalsRequest').fields;
const GetNewIssuedDocumentTotalsRequestMapping = require('../models/GetNewIssuedDocumentTotalsRequest').mapping;
const GetNewIssuedDocumentTotalsResponse = require('../models/GetNewIssuedDocumentTotalsResponse').fields;
const JoinIssuedDocumentsResponse = require('../models/JoinIssuedDocumentsResponse').fields;
const ListIssuedDocumentsResponse = require('../models/ListIssuedDocumentsResponse').fields;
const ModifyIssuedDocumentRequest = require('../models/ModifyIssuedDocumentRequest').fields;
const ModifyIssuedDocumentRequestMapping = require('../models/ModifyIssuedDocumentRequest').mapping;
const ModifyIssuedDocumentResponse = require('../models/ModifyIssuedDocumentResponse').fields;
const ScheduleEmailRequest = require('../models/ScheduleEmailRequest').fields;
const ScheduleEmailRequestMapping = require('../models/ScheduleEmailRequest').mapping;
const TransformIssuedDocumentResponse = require('../models/TransformIssuedDocumentResponse').fields;
const UploadIssuedDocumentAttachmentResponse = require('../models/UploadIssuedDocumentAttachmentResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    createIssuedDocument: {
        key: 'createIssuedDocument',
        noun: 'Create Issued Document',
        display: {
            label: 'createIssuedDocument',
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
                ...CreateIssuedDocumentRequest(),
            ],
            outputFields: [
                ...CreateIssuedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents'),
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
                        ...CreateIssuedDocumentRequestMapping(bundle),
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
    deleteIssuedDocument: {
        key: 'deleteIssuedDocument',
        noun: 'Delete Issued Document',
        display: {
            label: 'deleteIssuedDocument',
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
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}'),
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
    deleteIssuedDocumentAttachment: {
        key: 'deleteIssuedDocumentAttachment',
        noun: 'Delete Issued Document Attachment',
        display: {
            label: 'deleteIssuedDocumentAttachment',
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
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/attachment'),
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
    getEmailData: {
        key: 'getEmailData',
        noun: 'Get Email Data',
        display: {
            label: 'getEmailData',
            description: 'Gets the pre-compiled email details.',
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
                ...GetEmailDataResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/email'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
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
    getExistingIssuedDocumentTotals: {
        key: 'getExistingIssuedDocumentTotals',
        noun: 'Get Existing Issued Document Totals',
        display: {
            label: 'getExistingIssuedDocumentTotals',
            description: 'Returns the totals for a specified document.',
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
                ...GetExistingIssuedDocumentTotalsRequest(),
            ],
            outputFields: [
                ...GetExistingIssuedDocumentTotalsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/totals'),
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
                        ...GetExistingIssuedDocumentTotalsRequestMapping(bundle),
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
    getIssuedDocument: {
        key: 'getIssuedDocument',
        noun: 'Get Issued Document',
        display: {
            label: 'getIssuedDocument',
            description: 'Gets the specified document. ',
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
                ...GetIssuedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}'),
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
    getIssuedDocumentPreCreateInfo: {
        key: 'getIssuedDocumentPreCreateInfo',
        noun: 'Get Issued Document Pre-create info',
        display: {
            label: 'getIssuedDocumentPreCreateInfo',
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
                    label: 'The type of the issued document.',
                    type: 'string',
                    choices: [
                        'invoice',
                        'quote',
                        'proforma',
                        'receipt',
                        'delivery_note',
                        'credit_note',
                        'order',
                        'work_report',
                        'supplier_order',
                        'self_own_invoice',
                        'self_supplier_invoice',
                    ],
                },
            ],
            outputFields: [
                ...GetIssuedDocumentPreCreateInfoResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/info'),
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
    getNewIssuedDocumentTotals: {
        key: 'getNewIssuedDocumentTotals',
        noun: 'Get New Issued Document Totals',
        display: {
            label: 'getNewIssuedDocumentTotals',
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
                ...GetNewIssuedDocumentTotalsRequest(),
            ],
            outputFields: [
                ...GetNewIssuedDocumentTotalsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/totals'),
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
                        ...GetNewIssuedDocumentTotalsRequestMapping(bundle),
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
    joinIssuedDocuments: {
        key: 'joinIssuedDocuments',
        noun: 'Join issued documents',
        display: {
            label: 'joinIssuedDocuments',
            description: 'Joins issued documents.',
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
                    key: 'ids',
                    label: 'Ids of the documents.',
                    type: 'string',
                },
                {
                    key: 'group',
                    label: 'Group items.',
                    type: 'integer',
                    choices: [
                        '0',
                        '1',
                    ],
                },
                {
                    key: 'e_invoice',
                    label: 'New document e_invoice.',
                    type: 'integer',
                    choices: [
                        '0',
                        '1',
                    ],
                },
            ],
            outputFields: [
                ...JoinIssuedDocumentsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/join'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                        'ids': bundle.inputData?.['ids'],
                        'group': bundle.inputData?.['group'],
                        'e_invoice': bundle.inputData?.['e_invoice'],
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
    listIssuedDocuments: {
        key: 'listIssuedDocuments',
        noun: 'List Issued Documents',
        display: {
            label: 'listIssuedDocuments',
            description: 'Lists the issued documents.',
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
                    label: 'The type of the issued document.',
                    type: 'string',
                    choices: [
                        'invoice',
                        'quote',
                        'proforma',
                        'receipt',
                        'delivery_note',
                        'credit_note',
                        'order',
                        'work_report',
                        'supplier_order',
                        'self_own_invoice',
                        'self_supplier_invoice',
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
                {
                    key: 'inclusive',
                    label: '(Only for type &#x3D; delivery_notes) Include invoices delivery notes.',
                    type: 'integer',
                    choices: [
                        '0',
                        '1',
                    ],
                },
            ],
            outputFields: [
                ...ListIssuedDocumentsResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents'),
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
                        'inclusive': bundle.inputData?.['inclusive'],
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
    modifyIssuedDocument: {
        key: 'modifyIssuedDocument',
        noun: 'Modify Issued Document',
        display: {
            label: 'modifyIssuedDocument',
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
                ...ModifyIssuedDocumentRequest(),
            ],
            outputFields: [
                ...ModifyIssuedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}'),
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
                        ...ModifyIssuedDocumentRequestMapping(bundle),
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
    scheduleEmail: {
        key: 'scheduleEmail',
        noun: 'Schedule Email',
        display: {
            label: 'scheduleEmail',
            description: 'Schedules the sending of a document by email.',
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
                ...ScheduleEmailRequest(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/email'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...ScheduleEmailRequestMapping(bundle),
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
    transformIssuedDocument: {
        key: 'transformIssuedDocument',
        noun: 'Transform issued document',
        display: {
            label: 'transformIssuedDocument',
            description: 'Transforms the document.',
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
                    key: 'original_document_id',
                    label: 'Original document id.',
                    type: 'integer',
                },
                {
                    key: 'new_type',
                    label: 'New document type.',
                    type: 'string',
                },
                {
                    key: 'e_invoice',
                    label: 'New document e_invoice.',
                    type: 'integer',
                    choices: [
                        '0',
                        '1',
                    ],
                },
                {
                    key: 'transform_keep_copy',
                    label: 'Keep the old document.',
                    type: 'integer',
                    choices: [
                        '0',
                        '1',
                    ],
                },
            ],
            outputFields: [
                ...TransformIssuedDocumentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/transform'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                        'original_document_id': bundle.inputData?.['original_document_id'],
                        'new_type': bundle.inputData?.['new_type'],
                        'e_invoice': bundle.inputData?.['e_invoice'],
                        'transform_keep_copy': bundle.inputData?.['transform_keep_copy'],
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
    uploadIssuedDocumentAttachment: {
        key: 'uploadIssuedDocumentAttachment',
        noun: 'Upload Issued Document Attachment',
        display: {
            label: 'uploadIssuedDocumentAttachment',
            description: 'Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.',
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
                ...UploadIssuedDocumentAttachmentResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/attachment'),
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
