const samples = require('../samples/ArchiveApi');
const CreateArchiveDocumentRequest = require('../models/CreateArchiveDocumentRequest');
const CreateArchiveDocumentResponse = require('../models/CreateArchiveDocumentResponse');
const GetArchiveDocumentResponse = require('../models/GetArchiveDocumentResponse');
const ListArchiveDocumentsResponse = require('../models/ListArchiveDocumentsResponse');
const ModifyArchiveDocumentRequest = require('../models/ModifyArchiveDocumentRequest');
const ModifyArchiveDocumentResponse = require('../models/ModifyArchiveDocumentResponse');
const UploadArchiveAttachmentResponse = require('../models/UploadArchiveAttachmentResponse');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    createArchiveDocument: {
        key: 'createArchiveDocument',
        noun: 'Archive',
        display: {
            label: 'createArchiveDocument',
            description: 'Creates a new archive document.',
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
                ...CreateArchiveDocumentRequest.fields(),
            ],
            outputFields: [
                ...CreateArchiveDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/archive'),
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
                        ...CreateArchiveDocumentRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['CreateArchiveDocumentResponseSample']
        }
    },
    deleteArchiveDocument: {
        key: 'deleteArchiveDocument',
        noun: 'Archive',
        display: {
            label: 'deleteArchiveDocument',
            description: 'Deletes the specified archive document.',
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
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/archive/{document_id}'),
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
    getArchiveDocument: {
        key: 'getArchiveDocument',
        noun: 'Archive',
        display: {
            label: 'getArchiveDocument',
            description: 'Gets the specified archive document.',
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
                ...GetArchiveDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/archive/{document_id}'),
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
            sample: samples['GetArchiveDocumentResponseSample']
        }
    },
    listArchiveDocuments: {
        key: 'listArchiveDocuments',
        noun: 'Archive',
        display: {
            label: 'listArchiveDocuments',
            description: 'Lists the archive documents.',
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
                ...ListArchiveDocumentsResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/archive'),
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
            sample: samples['ListArchiveDocumentsResponseSample']
        }
    },
    modifyArchiveDocument: {
        key: 'modifyArchiveDocument',
        noun: 'Archive',
        display: {
            label: 'modifyArchiveDocument',
            description: 'Modifies the specified archive document.',
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
                ...ModifyArchiveDocumentRequest.fields(),
            ],
            outputFields: [
                ...ModifyArchiveDocumentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/archive/{document_id}'),
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
                        ...ModifyArchiveDocumentRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['ModifyArchiveDocumentResponseSample']
        }
    },
    uploadArchiveDocumentAttachment: {
        key: 'uploadArchiveDocumentAttachment',
        noun: 'Archive',
        display: {
            label: 'uploadArchiveDocumentAttachment',
            description: 'Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.',
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
                ...UploadArchiveAttachmentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('filename', bundle.inputData?.['filename'])
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['attachment'].split('/').slice(-1)[0]
                formData.append('attachment', (await (await z.request({url: bundle.inputData?.['attachment'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/archive/attachment'),
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
            sample: samples['UploadArchiveAttachmentResponseSample']
        }
    },
}
