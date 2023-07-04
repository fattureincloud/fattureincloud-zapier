const samples = require('../samples/IssuedEInvoicesApi');
const GetEInvoiceRejectionReasonResponse = require('../models/GetEInvoiceRejectionReasonResponse');
const SendEInvoiceRequest = require('../models/SendEInvoiceRequest');
const SendEInvoiceResponse = require('../models/SendEInvoiceResponse');
const VerifyEInvoiceXmlErrorResponse = require('../models/VerifyEInvoiceXmlErrorResponse');
const VerifyEInvoiceXmlResponse = require('../models/VerifyEInvoiceXmlResponse');
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
                ...GetEInvoiceRejectionReasonResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
            sample: samples['GetEInvoiceRejectionReasonResponseSample']
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
                        'Content-Type': '',
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
                    return { data: results };
                })
            },
            sample: { data: {} }
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
                ...SendEInvoiceRequest.fields(),
            ],
            outputFields: [
                ...SendEInvoiceResponse.fields('', false),
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
                        ...SendEInvoiceRequest.mapping(bundle),
                    },
                }
                return z.request(options).then((response) => {
                    response.throwForStatus();
                    const results = response.json;
                    return results;
                })
            },
            sample: samples['SendEInvoiceResponseSample']
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
                ...VerifyEInvoiceXmlResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://api-v2.fattureincloud.it/c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Authorization': 'Bearer {{bundle.authData.access_token}}',
                        'Content-Type': '',
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
            sample: samples['VerifyEInvoiceXmlResponseSample']
        }
    },
}
