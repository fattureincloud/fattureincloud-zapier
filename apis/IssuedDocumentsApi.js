const samples = require('../samples/IssuedDocumentsApi');
const CreateIssuedDocumentRequest = require('../models/CreateIssuedDocumentRequest');
const CreateIssuedDocumentResponse = require('../models/CreateIssuedDocumentResponse');
const GetEmailDataResponse = require('../models/GetEmailDataResponse');
const GetExistingIssuedDocumentTotalsRequest = require('../models/GetExistingIssuedDocumentTotalsRequest');
const GetExistingIssuedDocumentTotalsResponse = require('../models/GetExistingIssuedDocumentTotalsResponse');
const GetIssuedDocumentPreCreateInfoResponse = require('../models/GetIssuedDocumentPreCreateInfoResponse');
const GetIssuedDocumentResponse = require('../models/GetIssuedDocumentResponse');
const GetNewIssuedDocumentTotalsRequest = require('../models/GetNewIssuedDocumentTotalsRequest');
const GetNewIssuedDocumentTotalsResponse = require('../models/GetNewIssuedDocumentTotalsResponse');
const JoinIssuedDocumentsResponse = require('../models/JoinIssuedDocumentsResponse');
const ListIssuedDocumentsResponse = require('../models/ListIssuedDocumentsResponse');
const ModifyIssuedDocumentRequest = require('../models/ModifyIssuedDocumentRequest');
const ModifyIssuedDocumentResponse = require('../models/ModifyIssuedDocumentResponse');
const ScheduleEmailRequest = require('../models/ScheduleEmailRequest');
const TransformIssuedDocumentResponse = require('../models/TransformIssuedDocumentResponse');
const UploadIssuedDocumentAttachmentResponse = require('../models/UploadIssuedDocumentAttachmentResponse');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    createIssuedDocument: {
        key: 'createIssuedDocument',
        noun: 'Issued Documents',
        display: {
            label: 'Create Issued Document',
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
                ...CreateIssuedDocumentRequest.fields(),
            ],
            outputFields: [
                ...CreateIssuedDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...CreateIssuedDocumentRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createIssuedDocument', response.json);
                    return results;
                })
            },
            sample: samples['CreateIssuedDocumentResponseSample']
        }
    },
    deleteIssuedDocument: {
        key: 'deleteIssuedDocument',
        noun: 'Issued Documents',
        display: {
            label: 'Delete Issued Document',
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
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteIssuedDocument', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteIssuedDocumentAttachment: {
        key: 'deleteIssuedDocumentAttachment',
        noun: 'Issued Documents',
        display: {
            label: 'Delete Issued Document Attachment',
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
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteIssuedDocumentAttachment', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getEmailData: {
        key: 'getEmailData',
        noun: 'Issued Documents',
        display: {
            label: 'Get Email Data',
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
                ...GetEmailDataResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/email'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getEmailData', response.json);
                    return results;
                })
            },
            sample: samples['GetEmailDataResponseSample']
        }
    },
    getExistingIssuedDocumentTotals: {
        key: 'getExistingIssuedDocumentTotals',
        noun: 'Issued Documents',
        display: {
            label: 'Get Existing Issued Document Totals',
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
                ...GetExistingIssuedDocumentTotalsRequest.fields(),
            ],
            outputFields: [
                ...GetExistingIssuedDocumentTotalsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/totals'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GetExistingIssuedDocumentTotalsRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExistingIssuedDocumentTotals', response.json);
                    return results;
                })
            },
            sample: samples['GetExistingIssuedDocumentTotalsResponseSample']
        }
    },
    getIssuedDocument: {
        key: 'getIssuedDocument',
        noun: 'Issued Documents',
        display: {
            label: 'Get Issued Document',
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
                ...GetIssuedDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'fields': bundle.inputData?.['fields'],
                        'fieldset': bundle.inputData?.['fieldset'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIssuedDocument', response.json);
                    return results;
                })
            },
            sample: samples['GetIssuedDocumentResponseSample']
        }
    },
    getIssuedDocumentPreCreateInfo: {
        key: 'getIssuedDocumentPreCreateInfo',
        noun: 'Issued Documents',
        display: {
            label: 'Get Issued Document Pre-Create Info',
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
                ...GetIssuedDocumentPreCreateInfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/info'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'type': bundle.inputData?.['type'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIssuedDocumentPreCreateInfo', response.json);
                    return results;
                })
            },
            sample: samples['GetIssuedDocumentPreCreateInfoResponseSample']
        }
    },
    getNewIssuedDocumentTotals: {
        key: 'getNewIssuedDocumentTotals',
        noun: 'Issued Documents',
        display: {
            label: 'Get New Issued Document Totals',
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
                ...GetNewIssuedDocumentTotalsRequest.fields(),
            ],
            outputFields: [
                ...GetNewIssuedDocumentTotalsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/totals'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...GetNewIssuedDocumentTotalsRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getNewIssuedDocumentTotals', response.json);
                    return results;
                })
            },
            sample: samples['GetNewIssuedDocumentTotalsResponseSample']
        }
    },
    joinIssuedDocuments: {
        key: 'joinIssuedDocuments',
        noun: 'Issued Documents',
        display: {
            label: 'Join Issued Documents',
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
                    key: 'type',
                    label: 'Type of the documents to be joined',
                    type: 'string',
                    choices: [
                        'delivery_notes',
                        'orders',
                        'quotes',
                        'work_reports',
                    ],
                },
            ],
            outputFields: [
                ...JoinIssuedDocumentsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/join'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'ids': bundle.inputData?.['ids'],
                        'group': bundle.inputData?.['group'],
                        'type': bundle.inputData?.['type'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'joinIssuedDocuments', response.json);
                    return results;
                })
            },
            sample: samples['JoinIssuedDocumentsResponseSample']
        }
    },
    listIssuedDocuments: {
        key: 'listIssuedDocuments',
        noun: 'Issued Documents',
        display: {
            label: 'List Issued Documents',
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
                ...ListIssuedDocumentsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
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
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listIssuedDocuments', response.json);
                    return results;
                })
            },
            sample: samples['ListIssuedDocumentsResponseSample']
        }
    },
    modifyIssuedDocument: {
        key: 'modifyIssuedDocument',
        noun: 'Issued Documents',
        display: {
            label: 'Modify Issued Document',
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
                ...ModifyIssuedDocumentRequest.fields(),
            ],
            outputFields: [
                ...ModifyIssuedDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...ModifyIssuedDocumentRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'modifyIssuedDocument', response.json);
                    return results;
                })
            },
            sample: samples['ModifyIssuedDocumentResponseSample']
        }
    },
    scheduleEmail: {
        key: 'scheduleEmail',
        noun: 'Issued Documents',
        display: {
            label: 'Schedule Email',
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
                ...ScheduleEmailRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/email'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...ScheduleEmailRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'scheduleEmail', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    transformIssuedDocument: {
        key: 'transformIssuedDocument',
        noun: 'Issued Documents',
        display: {
            label: 'Transform Issued Document',
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
                    key: 'type',
                    label: 'Current document type.',
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
                ...TransformIssuedDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/transform'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'original_document_id': bundle.inputData?.['original_document_id'],
                        'new_type': bundle.inputData?.['new_type'],
                        'type': bundle.inputData?.['type'],
                        'e_invoice': bundle.inputData?.['e_invoice'],
                        'transform_keep_copy': bundle.inputData?.['transform_keep_copy'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'transformIssuedDocument', response.json);
                    return results;
                })
            },
            sample: samples['TransformIssuedDocumentResponseSample']
        }
    },
    uploadIssuedDocumentAttachment: {
        key: 'uploadIssuedDocumentAttachment',
        noun: 'Issued Documents',
        display: {
            label: 'Upload Issued Document Attachment',
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
                    label: 'Attachment file name',
                    type: 'string',
                },
                {
                    key: 'attachment',
                    label: 'Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]',
                    type: 'file',
                },
            ],
            outputFields: [
                ...UploadIssuedDocumentAttachmentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('filename', bundle.inputData?.['filename'])
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['attachment'].split('/').slice(-1)[0]
                formData.append('attachment', (await (await z.request({url: bundle.inputData?.['attachment'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/attachment'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'uploadIssuedDocumentAttachment', response.json);
                    return results;
                })
            },
            sample: samples['UploadIssuedDocumentAttachmentResponseSample']
        }
    },
}
