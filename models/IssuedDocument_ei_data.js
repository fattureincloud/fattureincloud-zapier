const _ = require('lodash')
const utils = require('../utils/utils');
const VatKind = require('./VatKind').fields;
const OriginalDocumentType = require('./OriginalDocumentType').fields;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'vat_kind',
                ...VatKind,
            },
            {
                key: keyPrefix + 'original_document_type',
                ...OriginalDocumentType,
            },
            {
                key: keyPrefix + 'od_number',
                label: labelPrefix + 'Original document number.',
                type: 'string',
            },
            {
                key: keyPrefix + 'od_date',
                label: labelPrefix + 'Original document date.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'cig',
                label: labelPrefix + 'CIG.',
                type: 'string',
            },
            {
                key: keyPrefix + 'cup',
                label: labelPrefix + 'CUP.',
                type: 'string',
            },
            {
                key: keyPrefix + 'payment_method',
                label: labelPrefix + 'Payment method (see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Rappresentazione-tabellare-fattura-ordinaria.pdf for the accepted values of ModalitaPagamento).',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_name',
                label: labelPrefix + 'Bank name.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_iban',
                label: labelPrefix + 'IBAN.',
                type: 'string',
            },
            {
                key: keyPrefix + 'bank_beneficiary',
                label: labelPrefix + 'Bank beneficiary.',
                type: 'string',
            },
            {
                key: keyPrefix + 'invoice_number',
                label: labelPrefix + 'Invoice number.',
                type: 'string',
            },
            {
                key: keyPrefix + 'invoice_date',
                label: labelPrefix + 'Invoice date.',
                type: 'datetime',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'vat_kind': bundle.inputData?.[keyPrefix + 'vat_kind'],
            'original_document_type': bundle.inputData?.[keyPrefix + 'original_document_type'],
            'od_number': bundle.inputData?.[keyPrefix + 'od_number'],
            'od_date': bundle.inputData?.[keyPrefix + 'od_date'],
            'cig': bundle.inputData?.[keyPrefix + 'cig'],
            'cup': bundle.inputData?.[keyPrefix + 'cup'],
            'payment_method': bundle.inputData?.[keyPrefix + 'payment_method'],
            'bank_name': bundle.inputData?.[keyPrefix + 'bank_name'],
            'bank_iban': bundle.inputData?.[keyPrefix + 'bank_iban'],
            'bank_beneficiary': bundle.inputData?.[keyPrefix + 'bank_beneficiary'],
            'invoice_number': bundle.inputData?.[keyPrefix + 'invoice_number'],
            'invoice_date': bundle.inputData?.[keyPrefix + 'invoice_date'],
        }
    },
}
