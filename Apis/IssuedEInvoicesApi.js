const GetEInvoiceRejectionReasonResponse = require('../Models/GetEInvoiceRejectionReasonResponse').fields;
const SendEInvoiceRequest = require('../Models/SendEInvoiceRequest').fields;
const SendEInvoiceRequestMapping = require('../Models/SendEInvoiceRequest').mapping;
const SendEInvoiceResponse = require('../Models/SendEInvoiceResponse').fields;
const VerifyEInvoiceXmlResponse = require('../Models/VerifyEInvoiceXmlResponse').fields;
const utils = require('../utils/utils');

module.exports = {
    getEInvoiceRejectionReason: {
        key: 'getEInvoiceRejectionReason',
        noun: 'Get e-invoice rejection reason',
        display: {
            label: 'getEInvoiceRejectionReason',
            description: 'Get e-invoice rejection reason',
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
        noun: 'Get e-invoice XML',
        display: {
            label: 'getEInvoiceXml',
            description: 'Downloads the e-invoice in XML format.',
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
        noun: 'Send the e-invoice',
        display: {
            label: 'sendEInvoice',
            description: 'Sends the e-invoice to SDI.',
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
        noun: 'Verify e-invoice XML',
        display: {
            label: 'verifyEInvoiceXml',
            description: 'Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.',
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