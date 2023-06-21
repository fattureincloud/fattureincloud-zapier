const samples = require('../samples/IssuedDocumentsApi.json');
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
        noun: 'IssuedDocuments',
        display: {
            label: 'createIssuedDocument',
            description: 'Creates a new document.',
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
            },
            sample: samples['CreateIssuedDocumentResponseSample']
        }
    },
    deleteIssuedDocument: {
        key: 'deleteIssuedDocument',
        noun: 'IssuedDocuments',
        display: {
            label: 'deleteIssuedDocument',
            description: 'Deletes the specified document.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: { data: {} }
        }
    },
    deleteIssuedDocumentAttachment: {
        key: 'deleteIssuedDocumentAttachment',
        noun: 'IssuedDocuments',
        display: {
            label: 'deleteIssuedDocumentAttachment',
            description: 'Removes the attachment of the specified document.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: { data: {} }
        }
    },
    getEmailData: {
        key: 'getEmailData',
        noun: 'IssuedDocuments',
        display: {
            label: 'getEmailData',
            description: 'Gets the pre-compiled email details.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: samples['GetEmailDataResponseSample']
        }
    },
    getExistingIssuedDocumentTotals: {
        key: 'getExistingIssuedDocumentTotals',
        noun: 'IssuedDocuments',
        display: {
            label: 'getExistingIssuedDocumentTotals',
            description: 'Returns the totals for a specified document.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: samples['GetExistingIssuedDocumentTotalsResponseSample']
        }
    },
    getIssuedDocument: {
        key: 'getIssuedDocument',
        noun: 'IssuedDocuments',
        display: {
            label: 'getIssuedDocument',
            description: 'Gets the specified document. ',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: samples['GetIssuedDocumentResponseSample']
        }
    },
    getIssuedDocumentPreCreateInfo: {
        key: 'getIssuedDocumentPreCreateInfo',
        noun: 'IssuedDocuments',
        display: {
            label: 'getIssuedDocumentPreCreateInfo',
            description: 'Retrieves the information useful while creating a new document.',
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
                    key: 'type',
                    label: 'The type of the issued document.',
                    type: 'string',
                    required: true,
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
            },
            sample: samples['GetIssuedDocumentPreCreateInfoResponseSample']
        }
    },
    getNewIssuedDocumentTotals: {
        key: 'getNewIssuedDocumentTotals',
        noun: 'IssuedDocuments',
        display: {
            label: 'getNewIssuedDocumentTotals',
            description: 'Returns the totals for a new document.',
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
            },
            sample: samples['GetNewIssuedDocumentTotalsResponseSample']
        }
    },
    joinIssuedDocuments: {
        key: 'joinIssuedDocuments',
        noun: 'IssuedDocuments',
        display: {
            label: 'joinIssuedDocuments',
            description: 'Joins issued documents.',
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
                    key: 'ids',
                    label: 'Ids of the documents.',
                    type: 'string',
                    required: true,
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
            },
            sample: samples['JoinIssuedDocumentsResponseSample']
        }
    },
    listIssuedDocuments: {
        key: 'listIssuedDocuments',
        noun: 'IssuedDocuments',
        display: {
            label: 'listIssuedDocuments',
            description: 'Lists the issued documents.',
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
                    key: 'type',
                    label: 'The type of the issued document.',
                    type: 'string',
                    required: true,
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
            },
            sample: samples['ListIssuedDocumentsResponseSample']
        }
    },
    modifyIssuedDocument: {
        key: 'modifyIssuedDocument',
        noun: 'IssuedDocuments',
        display: {
            label: 'modifyIssuedDocument',
            description: 'Modifies the specified document.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: samples['ModifyIssuedDocumentResponseSample']
        }
    },
    scheduleEmail: {
        key: 'scheduleEmail',
        noun: 'IssuedDocuments',
        display: {
            label: 'scheduleEmail',
            description: 'Schedules the sending of a document by email.',
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
                    key: 'document_id',
                    label: 'The ID of the document.',
                    type: 'integer',
                    required: true,
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
            },
            sample: { data: {} }
        }
    },
    transformIssuedDocument: {
        key: 'transformIssuedDocument',
        noun: 'IssuedDocuments',
        display: {
            label: 'transformIssuedDocument',
            description: 'Transforms the document.',
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
                    key: 'original_document_id',
                    label: 'Original document id.',
                    type: 'integer',
                    required: true,
                },
                {
                    key: 'new_type',
                    label: 'New document type.',
                    type: 'string',
                    required: true,
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
            },
            sample: samples['TransformIssuedDocumentResponseSample']
        }
    },
    uploadIssuedDocumentAttachment: {
        key: 'uploadIssuedDocumentAttachment',
        noun: 'IssuedDocuments',
        display: {
            label: 'uploadIssuedDocumentAttachment',
            description: 'Uploads an attachment destined to an issued document. The actual association between the document and the attachment must be implemented separately, using the returned token.',
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
            },
            sample: samples['UploadIssuedDocumentAttachmentResponseSample']
        }
    },
}
