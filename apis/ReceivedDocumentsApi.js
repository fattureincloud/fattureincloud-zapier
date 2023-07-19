const samples = require('../samples/ReceivedDocumentsApi');
const CreateReceivedDocumentRequest = require('../models/CreateReceivedDocumentRequest');
const CreateReceivedDocumentResponse = require('../models/CreateReceivedDocumentResponse');
const GetExistingReceivedDocumentTotalsRequest = require('../models/GetExistingReceivedDocumentTotalsRequest');
const GetExistingReceivedDocumentTotalsResponse = require('../models/GetExistingReceivedDocumentTotalsResponse');
const GetNewReceivedDocumentTotalsRequest = require('../models/GetNewReceivedDocumentTotalsRequest');
const GetNewReceivedDocumentTotalsResponse = require('../models/GetNewReceivedDocumentTotalsResponse');
const GetReceivedDocumentPreCreateInfoResponse = require('../models/GetReceivedDocumentPreCreateInfoResponse');
const GetReceivedDocumentResponse = require('../models/GetReceivedDocumentResponse');
const ListReceivedDocumentsResponse = require('../models/ListReceivedDocumentsResponse');
const ModifyReceivedDocumentRequest = require('../models/ModifyReceivedDocumentRequest');
const ModifyReceivedDocumentResponse = require('../models/ModifyReceivedDocumentResponse');
const UploadReceivedDocumentAttachmentResponse = require('../models/UploadReceivedDocumentAttachmentResponse');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    createReceivedDocument: {
        key: 'createReceivedDocument',
        noun: 'Received Documents',
        display: {
            label: 'Create Received Document',
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
                ...CreateReceivedDocumentRequest.fields(),
            ],
            outputFields: [
                ...CreateReceivedDocumentResponse.fields('', false),
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
                        ...CreateReceivedDocumentRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreateReceivedDocumentResponseSample']
        }
    },
    deleteReceivedDocument: {
        key: 'deleteReceivedDocument',
        noun: 'Received Documents',
        display: {
            label: 'Delete Received Document',
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
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
    deleteReceivedDocumentAttachment: {
        key: 'deleteReceivedDocumentAttachment',
        noun: 'Received Documents',
        display: {
            label: 'Delete Received Document Attachment',
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
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}/attachment'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
    getExistingReceivedDocumentTotals: {
        key: 'getExistingReceivedDocumentTotals',
        noun: 'Received Documents',
        display: {
            label: 'Get Existing Received Document Totals',
            description: 'Returns the totals for the specified document.',
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
                ...GetExistingReceivedDocumentTotalsRequest.fields(),
            ],
            outputFields: [
                ...GetExistingReceivedDocumentTotalsResponse.fields('', false),
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
                        ...GetExistingReceivedDocumentTotalsRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['GetExistingReceivedDocumentTotalsResponseSample']
        }
    },
    getNewReceivedDocumentTotals: {
        key: 'getNewReceivedDocumentTotals',
        noun: 'Received Documents',
        display: {
            label: 'Get New Received Document Totals',
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
                ...GetNewReceivedDocumentTotalsRequest.fields(),
            ],
            outputFields: [
                ...GetNewReceivedDocumentTotalsResponse.fields('', false),
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
                        ...GetNewReceivedDocumentTotalsRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['GetNewReceivedDocumentTotalsResponseSample']
        }
    },
    getReceivedDocument: {
        key: 'getReceivedDocument',
        noun: 'Received Documents',
        display: {
            label: 'Get Received Document',
            description: 'Gets the specified document.',
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
                ...GetReceivedDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/{document_id}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
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
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['GetReceivedDocumentResponseSample']
        }
    },
    getReceivedDocumentPreCreateInfo: {
        key: 'getReceivedDocumentPreCreateInfo',
        noun: 'Received Documents',
        display: {
            label: 'Get Received Document Pre-Create Info',
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
                    label: 'The type of the received document.',
                    type: 'string',
                    required: true,
                    choices: [
                        'expense',
                        'passive_credit_note',
                        'passive_delivery_note',
                    ],
                },
            ],
            outputFields: [
                ...GetReceivedDocumentPreCreateInfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/info'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
            sample: samples['GetReceivedDocumentPreCreateInfoResponseSample']
        }
    },
    listReceivedDocuments: {
        key: 'listReceivedDocuments',
        noun: 'Received Documents',
        display: {
            label: 'List Received Documents',
            description: 'Lists the received documents.',
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
                    label: 'The type of the received document.',
                    type: 'string',
                    required: true,
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
                ...ListReceivedDocumentsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
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
            sample: samples['ListReceivedDocumentsResponseSample']
        }
    },
    modifyReceivedDocument: {
        key: 'modifyReceivedDocument',
        noun: 'Received Documents',
        display: {
            label: 'Modify Received Document',
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
                ...ModifyReceivedDocumentRequest.fields(),
            ],
            outputFields: [
                ...ModifyReceivedDocumentResponse.fields('', false),
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
                        ...ModifyReceivedDocumentRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyReceivedDocumentResponseSample']
        }
    },
    uploadReceivedDocumentAttachment: {
        key: 'uploadReceivedDocumentAttachment',
        noun: 'Received Documents',
        display: {
            label: 'Upload Received Document Attachment',
            description: 'Uploads an attachment destined to a received document. The actual association between the document and the attachment must be implemented separately, using the returned token.',
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
                ...UploadReceivedDocumentAttachmentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('filename', bundle.inputData?.['filename'])
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['attachment'].split('/').slice(-1)[0]
                formData.append('attachment', (await (await z.request({url: bundle.inputData?.['attachment'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/received_documents/attachment'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: formData,
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['UploadReceivedDocumentAttachmentResponseSample']
        }
    },
}
