const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocumentType = require('./ReceivedDocumentType').fields;
const Entity = require('./Entity').fields;
const EntityMapping = require('./Entity').mapping;
const Currency = require('./Currency').fields;
const CurrencyMapping = require('./Currency').mapping;
const ReceivedDocumentItemsListItem = require('./ReceivedDocumentItemsListItem').fields;
const ReceivedDocumentItemsListItemMapping = require('./ReceivedDocumentItemsListItem').mapping;
const ReceivedDocumentPaymentsListItem = require('./ReceivedDocumentPaymentsListItem').fields;
const ReceivedDocumentPaymentsListItemMapping = require('./ReceivedDocumentPaymentsListItem').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Unique identifier of the document. - [${keyPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                ...ReceivedDocumentType(`${keyPrefix}type`),
            },
            ...Entity(`${keyPrefix}entity`),
            {
                key: `${keyPrefix}date`,
                label: `Date of the document [If not specified, today date is used]. - [${keyPrefix}date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}category`,
                label: `Document category. - [${keyPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `Document description. - [${keyPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `Total net amount. - [${keyPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Total vat amount. - [${keyPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax`,
                label: `Withholding tax amount. - [${keyPrefix}amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax`,
                label: `Other withholding tax amount. - [${keyPrefix}amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `[Read Only] Total gross amount. - [${keyPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amortization`,
                label: `Amortization value - [${keyPrefix}amortization]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}rc_center`,
                label: `Revenue center. - [${keyPrefix}rc_center]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoice_number`,
                label: `Invoice number - [${keyPrefix}invoice_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_marked`,
                label: `[${keyPrefix}is_marked]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is_detailed`,
                label: `[${keyPrefix}is_detailed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `[Read Only] Indicates if this is an e-invoice. - [${keyPrefix}e_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}next_due_date`,
                label: `[Read Only] Next due date. - [${keyPrefix}next_due_date]`,
                type: 'datetime',
            },
            ...Currency(`${keyPrefix}currency`),
            {
                key: `${keyPrefix}tax_deductibility`,
                label: `Tax deducibility percentage. - [${keyPrefix}tax_deductibility]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}vat_deductibility`,
                label: `Vat deducibility percentage. - [${keyPrefix}vat_deductibility]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}items_list`,
                label: `${keyPrefix}items_list]`,
                children: ReceivedDocumentItemsListItem(`${keyPrefix}items_list`), 
            },
            {
                key: `${keyPrefix}payments_list`,
                label: `${keyPrefix}payments_list]`,
                children: ReceivedDocumentPaymentsListItem(`${keyPrefix}payments_list`), 
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only]  Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /received_documents or PUT /received_documents/{documentId}. - [${keyPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_preview_url`,
                label: `[Temporary] [Read Only]  Attachment preview url. - [${keyPrefix}attachment_preview_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}auto_calculate`,
                label: `If set to false total items amount and total payments amount can be different. - [${keyPrefix}auto_calculate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}attachment_token`,
                label: `Uploaded attachement token. - [${keyPrefix}attachment_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${keyPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `[${keyPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'entity': utils.removeIfEmpty(EntityMapping(bundle, `${keyPrefix}entity`)),
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
            'amount_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_withholding_tax`],
            'amount_other_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_other_withholding_tax`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'amortization': bundle.inputData?.[`${keyPrefix}amortization`],
            'rc_center': bundle.inputData?.[`${keyPrefix}rc_center`],
            'invoice_number': bundle.inputData?.[`${keyPrefix}invoice_number`],
            'is_marked': bundle.inputData?.[`${keyPrefix}is_marked`],
            'is_detailed': bundle.inputData?.[`${keyPrefix}is_detailed`],
            'e_invoice': bundle.inputData?.[`${keyPrefix}e_invoice`],
            'next_due_date': bundle.inputData?.[`${keyPrefix}next_due_date`],
            'currency': utils.removeIfEmpty(CurrencyMapping(bundle, `${keyPrefix}currency`)),
            'tax_deductibility': bundle.inputData?.[`${keyPrefix}tax_deductibility`],
            'vat_deductibility': bundle.inputData?.[`${keyPrefix}vat_deductibility`],
            'items_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}items_list`]),
            'payments_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payments_list`]),
            'attachment_url': bundle.inputData?.[`${keyPrefix}attachment_url`],
            'attachment_preview_url': bundle.inputData?.[`${keyPrefix}attachment_preview_url`],
            'auto_calculate': bundle.inputData?.[`${keyPrefix}auto_calculate`],
            'attachment_token': bundle.inputData?.[`${keyPrefix}attachment_token`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
