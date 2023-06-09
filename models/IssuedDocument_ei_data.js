const _ = require('lodash')
const utils = require('../utils/utils');
const VatKind = require('./VatKind').fields;
const OriginalDocumentType = require('./OriginalDocumentType').fields;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}vat_kind`,
                ...VatKind(`${keyPrefix}vat_kind`),
            },
            {
                key: `${keyPrefix}original_document_type`,
                ...OriginalDocumentType(`${keyPrefix}original_document_type`),
            },
            {
                key: `${keyPrefix}od_number`,
                label: `E-invoice original document number - [${keyPrefix}od_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}od_date`,
                label: `E-invoice original document date - [${keyPrefix}od_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}cig`,
                label: `E-invoice CIG - [${keyPrefix}cig]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cup`,
                label: `E-invoice CUP - [${keyPrefix}cup]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}payment_method`,
                label: `E-invoice payment method [required for e-invoices](see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.2/Rappresentazione_Tabellare_FattOrdinaria_V1.2.2.pdf for the accepted values of ModalitaPagamento) - [${keyPrefix}payment_method]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_name`,
                label: `E-invoice bank name - [${keyPrefix}bank_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `E-invoice bank IBAN - [${keyPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_beneficiary`,
                label: `E-invoice bank beneficiary - [${keyPrefix}bank_beneficiary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoice_number`,
                label: `E-invoice invoice number - [${keyPrefix}invoice_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoice_date`,
                label: `E-invoice invoice date - [${keyPrefix}invoice_date]`,
                type: 'datetime',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'vat_kind': bundle.inputData?.[`${keyPrefix}vat_kind`],
            'original_document_type': bundle.inputData?.[`${keyPrefix}original_document_type`],
            'od_number': bundle.inputData?.[`${keyPrefix}od_number`],
            'od_date': bundle.inputData?.[`${keyPrefix}od_date`],
            'cig': bundle.inputData?.[`${keyPrefix}cig`],
            'cup': bundle.inputData?.[`${keyPrefix}cup`],
            'payment_method': bundle.inputData?.[`${keyPrefix}payment_method`],
            'bank_name': bundle.inputData?.[`${keyPrefix}bank_name`],
            'bank_iban': bundle.inputData?.[`${keyPrefix}bank_iban`],
            'bank_beneficiary': bundle.inputData?.[`${keyPrefix}bank_beneficiary`],
            'invoice_number': bundle.inputData?.[`${keyPrefix}invoice_number`],
            'invoice_date': bundle.inputData?.[`${keyPrefix}invoice_date`],
        }
    },
}
