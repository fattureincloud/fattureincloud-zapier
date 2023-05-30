const GetEInvoiceRejectionReasonResponse = require('../models/GetEInvoiceRejectionReasonResponse').fields;
const SendEInvoiceRequest = require('../models/SendEInvoiceRequest').fields;
const SendEInvoiceRequestMapping = require('../models/SendEInvoiceRequest').mapping;
const SendEInvoiceResponse = require('../models/SendEInvoiceResponse').fields;
const VerifyEInvoiceXmlResponse = require('../models/VerifyEInvoiceXmlResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    getEInvoiceRejectionReason: {
        key: 'getEInvoiceRejectionReason',
        noun: 'IssuedEInvoices',
        display: {
            label: 'getEInvoiceRejectionReason',
            description: 'Get e-invoice rejection reason',
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
                ...GetEInvoiceRejectionReasonResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason'),
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
    getEInvoiceXml: {
        key: 'getEInvoiceXml',
        noun: 'IssuedEInvoices',
        display: {
            label: 'getEInvoiceXml',
            description: 'Downloads the e-invoice in XML format.',
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
                    key: 'include_attachment',
                    label: 'Include the attachment to the XML e-invoice.',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/e_invoice/xml'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        
                        'Accept': 'text/xml',
                    },
                    params: {
                        'include_attachment': bundle.inputData?.['include_attachment'],
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
    sendEInvoice: {
        key: 'sendEInvoice',
        noun: 'IssuedEInvoices',
        display: {
            label: 'sendEInvoice',
            description: 'Sends the e-invoice to SDI.',
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
                ...SendEInvoiceRequest(),
            ],
            outputFields: [
                ...SendEInvoiceResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/e_invoice/send'),
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
                        ...SendEInvoiceRequestMapping(bundle),
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
    verifyEInvoiceXml: {
        key: 'verifyEInvoiceXml',
        noun: 'IssuedEInvoices',
        display: {
            label: 'verifyEInvoiceXml',
            description: 'Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.',
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
                ...VerifyEInvoiceXmlResponse(),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify'),
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
}