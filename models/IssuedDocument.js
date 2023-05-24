const _ = require('lodash')
const utils = require('../utils/utils');
const Entity = require('./Entity').fields;
const EntityMapping = require('./Entity').mapping;
const IssuedDocumentType = require('./IssuedDocumentType').fields;
const Currency = require('./Currency').fields;
const CurrencyMapping = require('./Currency').mapping;
const Language = require('./Language').fields;
const LanguageMapping = require('./Language').mapping;
const PaymentMethod = require('./PaymentMethod').fields;
const PaymentMethodMapping = require('./PaymentMethod').mapping;
const IssuedDocument_ei_data = require('./IssuedDocument_ei_data').fields;
const IssuedDocument_ei_dataMapping = require('./IssuedDocument_ei_data').mapping;
const IssuedDocumentItemsListItem = require('./IssuedDocumentItemsListItem').fields;
const IssuedDocumentItemsListItemMapping = require('./IssuedDocumentItemsListItem').mapping;
const IssuedDocumentPaymentsListItem = require('./IssuedDocumentPaymentsListItem').fields;
const IssuedDocumentPaymentsListItemMapping = require('./IssuedDocumentPaymentsListItem').mapping;
const DocumentTemplate = require('./DocumentTemplate').fields;
const DocumentTemplateMapping = require('./DocumentTemplate').mapping;
const ShowTotalsMode = require('./ShowTotalsMode').fields;
const IssuedDocument_extra_data = require('./IssuedDocument_extra_data').fields;
const IssuedDocument_extra_dataMapping = require('./IssuedDocument_extra_data').mapping;

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
                key: keyPrefix + 'id',
                label: labelPrefix + 'Unique identifier of the document.',
                type: 'integer',
            },
            ...Entity(keyPrefix + 'entity'),
            {
                key: keyPrefix + 'type',
                ...IssuedDocumentType,
            },
            {
                key: keyPrefix + 'number',
                label: labelPrefix + 'Number of the document [If not specified, next number is used]',
                type: 'integer',
            },
            {
                key: keyPrefix + 'numeration',
                label: labelPrefix + 'Numeration of the document [Not available if type&#x3D;delivery_note]',
                type: 'string',
            },
            {
                key: keyPrefix + 'date',
                label: labelPrefix + 'Date of the document [If not specified, today date is used]',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'year',
                label: labelPrefix + 'Invoice year.',
                type: 'integer',
            },
            ...Currency(keyPrefix + 'currency'),
            ...Language(keyPrefix + 'language'),
            {
                key: keyPrefix + 'subject',
                label: labelPrefix + 'Issued document subject.',
                type: 'string',
            },
            {
                key: keyPrefix + 'visible_subject',
                label: labelPrefix + 'Issued document visible subject.',
                type: 'string',
            },
            {
                key: keyPrefix + 'rc_center',
                label: labelPrefix + 'Revenue center [or cost center if type&#x3D;supplier_order].',
                type: 'string',
            },
            {
                key: keyPrefix + 'notes',
                label: labelPrefix + 'Issued document extra notes.',
                type: 'string',
            },
            {
                key: keyPrefix + 'rivalsa',
                label: labelPrefix + '\&quot;Rivalsa INPS\&quot; percentual value',
                type: 'number',
            },
            {
                key: keyPrefix + 'cassa',
                label: labelPrefix + '\&quot;Cassa previdenziale\&quot; percentual value',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_cassa',
                label: labelPrefix + '[Read Only] Cassa amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'cassa_taxable',
                label: labelPrefix + 'Cassa taxable percentage',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_cassa_taxable',
                label: labelPrefix + '[Can be set only if cassa_taxable is NULL] Cassa2 taxable amount',
                type: 'number',
            },
            {
                key: keyPrefix + 'cassa2',
                label: labelPrefix + '\&quot;Cassa previdenziale 2\&quot; percentual value',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_cassa2',
                label: labelPrefix + '[Read Only] Cassa amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'cassa2_taxable',
                label: labelPrefix + 'Cassa2 taxable percentage',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_cassa2_taxable',
                label: labelPrefix + '[Can be set only if cassa2_taxable is NULL] Cassa2 taxable amount',
                type: 'number',
            },
            {
                key: keyPrefix + 'global_cassa_taxable',
                label: labelPrefix + 'Global cassa taxable percentage',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_global_cassa_taxable',
                label: labelPrefix + '[Can be set only if global_cassa_taxable is NULL] Global cassa taxable amount',
                type: 'number',
            },
            {
                key: keyPrefix + 'withholding_tax',
                label: labelPrefix + 'Withholding tax (ritenuta d&#39;acconto) percentual value',
                type: 'number',
            },
            {
                key: keyPrefix + 'withholding_tax_taxable',
                label: labelPrefix + 'Withholding tax taxable (imponibile) percentual value',
                type: 'number',
            },
            {
                key: keyPrefix + 'other_withholding_tax',
                label: labelPrefix + 'Other withholding tax (altra ritenuta) percentual value',
                type: 'number',
            },
            {
                key: keyPrefix + 'stamp_duty',
                label: labelPrefix + 'Stamp duty value [0 if not present]',
                type: 'number',
            },
            ...PaymentMethod(keyPrefix + 'payment_method'),
            {
                key: keyPrefix + 'use_split_payment',
                label: labelPrefix + 'Use split payment',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'use_gross_prices',
                label: labelPrefix + 'Use gross prices',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'e_invoice',
                label: labelPrefix + 'Indicates if this is an e-invoice.',
                type: 'boolean',
            },
            ...IssuedDocument_ei_data(keyPrefix + 'ei_data'),
            {
                key: keyPrefix + 'ei_cassa_type',
                label: labelPrefix + 'E-invoice cassa type',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_cassa2_type',
                label: labelPrefix + 'E-invoice cassa2 type',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_withholding_tax_causal',
                label: labelPrefix + 'E-invoice withholding tax causal',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_other_withholding_tax_type',
                label: labelPrefix + 'E-invoice other withholding tax type',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_other_withholding_tax_causal',
                label: labelPrefix + 'E-invoice other withholding tax causal',
                type: 'string',
            },
            {
                key: keyPrefix + 'items_list',
                
                children: IssuedDocumentItemsListItem(keyPrefix + 'items_list'), 
            },
            {
                key: keyPrefix + 'payments_list',
                
                children: IssuedDocumentPaymentsListItem(keyPrefix + 'payments_list'), 
            },
            ...DocumentTemplate(keyPrefix + 'template'),
            ...DocumentTemplate(keyPrefix + 'delivery_note_template'),
            ...DocumentTemplate(keyPrefix + 'acc_inv_template'),
            {
                key: keyPrefix + 'h_margins',
                label: labelPrefix + 'Horizontal margins.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'v_margins',
                label: labelPrefix + 'Vertical margins.',
                type: 'integer',
            },
            {
                key: keyPrefix + 'show_payments',
                label: labelPrefix + 'Shows the expiration dates of the payments on the document.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'show_payment_method',
                label: labelPrefix + 'Show the payment method details on the document.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'show_totals',
                ...ShowTotalsMode,
            },
            {
                key: keyPrefix + 'show_paypal_button',
                label: labelPrefix + 'Show paypal button',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'show_notification_button',
                label: labelPrefix + 'Show notification button',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'show_tspay_button',
                label: labelPrefix + 'Show ts pay button.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'delivery_note',
                
                type: 'boolean',
            },
            {
                key: keyPrefix + 'accompanying_invoice',
                label: labelPrefix + 'Attach an accompanying invoice.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'dn_number',
                label: labelPrefix + 'Number (for the attached delivery note).',
                type: 'integer',
            },
            {
                key: keyPrefix + 'dn_date',
                label: labelPrefix + 'Date (for the attached delivery note).',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'dn_ai_packages_number',
                label: labelPrefix + 'Number of packages (for the attached delivery note).',
                type: 'string',
            },
            {
                key: keyPrefix + 'dn_ai_weight',
                label: labelPrefix + 'Weight (for the attached delivery note).',
                type: 'string',
            },
            {
                key: keyPrefix + 'dn_ai_causal',
                label: labelPrefix + 'Causal (for the attached delivery note).',
                type: 'string',
            },
            {
                key: keyPrefix + 'dn_ai_destination',
                label: labelPrefix + 'Destination (for the attached delivery note).',
                type: 'string',
            },
            {
                key: keyPrefix + 'dn_ai_transporter',
                label: labelPrefix + 'Transporter (for the attached delivery note).',
                type: 'string',
            },
            {
                key: keyPrefix + 'dn_ai_notes',
                label: labelPrefix + 'Notes (for the attached delivery note).',
                type: 'string',
            },
            {
                key: keyPrefix + 'is_marked',
                label: labelPrefix + 'This is true if the document is marked.',
                type: 'boolean',
            },
            {
                key: keyPrefix + 'amount_net',
                label: labelPrefix + '[Read Only] Total net amount (competenze).',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_vat',
                label: labelPrefix + '[Read Only] Total vat amount (IVA).',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_gross',
                label: labelPrefix + '[Read Only] Total gross amount (totale documento).',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_due_discount',
                label: labelPrefix + 'Amount due discount',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_rivalsa',
                label: labelPrefix + '[Read Only] Rivalsa amount.',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_rivalsa_taxable',
                label: labelPrefix + 'Taxable rivalsa amount',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_withholding_tax',
                label: labelPrefix + '[Read Only] Withholding tax amount (ritenuta d&#39;acconto).',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_withholding_tax_taxable',
                label: labelPrefix + 'Taxable withholding tax amount',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_other_withholding_tax',
                label: labelPrefix + '[Read Only] Other withholding tax amount (altra ritenuta).',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_other_withholding_tax_taxable',
                label: labelPrefix + 'Taxable other withholding tax amount',
                type: 'number',
            },
            {
                key: keyPrefix + 'amount_enasarco_taxable',
                label: labelPrefix + 'Taxable enasarco amount',
                type: 'number',
            },
            ...IssuedDocument_extra_data(keyPrefix + 'extra_data'),
            {
                key: keyPrefix + 'seen_date',
                label: labelPrefix + 'Date when the client/supplier has seen the document.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'next_due_date',
                label: labelPrefix + 'Date of the next not paid payment.',
                type: 'datetime',
            },
            {
                key: keyPrefix + 'url',
                label: labelPrefix + '[Temporary] [Read Only]   Public url of the document PDF file.',
                type: 'string',
            },
            {
                key: keyPrefix + 'dn_url',
                label: labelPrefix + '[Temporary] [Read Only]   Public url of the attached delivery note PDF file.',
                type: 'string',
            },
            {
                key: keyPrefix + 'ai_url',
                label: labelPrefix + '[Temporary] [Read Only]   Public url of the accompanying invoice PDF file.',
                type: 'string',
            },
            {
                key: keyPrefix + 'attachment_url',
                label: labelPrefix + '[Temporary] [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}.',
                type: 'string',
            },
            {
                key: keyPrefix + 'attachment_token',
                label: labelPrefix + '[Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded.',
                type: 'string',
            },
            {
                key: keyPrefix + 'ei_raw',
                label: labelPrefix + 'Advanced raw attributes for e-invoices.',
                dict: true,
            },
            {
                key: keyPrefix + 'ei_status',
                label: labelPrefix + '[Read only] Status of the e-invoice.   * &#x60;attempt&#x60; - We are trying to send the invoice, please wait up to 2 hours   * &#x60;missing&#x60; - The invoice is missing   * &#x60;not_sent&#x60; - The invoice has yet to be sent   * &#x60;sent&#x60; - The invoice was sent   * &#x60;pending&#x60; - The checks for the digital signature and sending are in progress   * &#x60;processing&#x60; - The SDI is delivering the invoice to the customer   * &#x60;error&#x60; - An error occurred while handling the invoice, please try to resend it or contact support   * &#x60;discarded&#x60; - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * &#x60;not_delivered&#x60; - The SDI was unable to deliver the invoice   * &#x60;accepted&#x60; - The customer accepted the invoice   * &#x60;rejected&#x60; - The customer rejected the invoice, so it must be corrected   * &#x60;no_response&#x60; - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice   * &#x60;manual_accepted&#x60; - The customer accepted the invoice   * &#x60;manual_rejected&#x60; - The customer rejected the invoice ',
                type: 'string',
                choices: [
                    'attempt',
                    'missing',
                    'not_sent',
                    'sent',
                    'pending',
                    'processing',
                    'error',
                    'discarded',
                    'not_delivered',
                    'accepted',
                    'rejected',
                    'no_response',
                    'manual_accepted',
                    'manual_rejected',
                ],
            },
            {
                key: keyPrefix + 'created_at',
                
                type: 'string',
            },
            {
                key: keyPrefix + 'updated_at',
                
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'id': bundle.inputData?.[keyPrefix + 'id'],
            'entity': utils.removeIfEmpty(EntityMapping(bundle, keyPrefix + 'entity')),
            'type': bundle.inputData?.[keyPrefix + 'type'],
            'number': bundle.inputData?.[keyPrefix + 'number'],
            'numeration': bundle.inputData?.[keyPrefix + 'numeration'],
            'date': bundle.inputData?.[keyPrefix + 'date'],
            'year': bundle.inputData?.[keyPrefix + 'year'],
            'currency': utils.removeIfEmpty(CurrencyMapping(bundle, keyPrefix + 'currency')),
            'language': utils.removeIfEmpty(LanguageMapping(bundle, keyPrefix + 'language')),
            'subject': bundle.inputData?.[keyPrefix + 'subject'],
            'visible_subject': bundle.inputData?.[keyPrefix + 'visible_subject'],
            'rc_center': bundle.inputData?.[keyPrefix + 'rc_center'],
            'notes': bundle.inputData?.[keyPrefix + 'notes'],
            'rivalsa': bundle.inputData?.[keyPrefix + 'rivalsa'],
            'cassa': bundle.inputData?.[keyPrefix + 'cassa'],
            'amount_cassa': bundle.inputData?.[keyPrefix + 'amount_cassa'],
            'cassa_taxable': bundle.inputData?.[keyPrefix + 'cassa_taxable'],
            'amount_cassa_taxable': bundle.inputData?.[keyPrefix + 'amount_cassa_taxable'],
            'cassa2': bundle.inputData?.[keyPrefix + 'cassa2'],
            'amount_cassa2': bundle.inputData?.[keyPrefix + 'amount_cassa2'],
            'cassa2_taxable': bundle.inputData?.[keyPrefix + 'cassa2_taxable'],
            'amount_cassa2_taxable': bundle.inputData?.[keyPrefix + 'amount_cassa2_taxable'],
            'global_cassa_taxable': bundle.inputData?.[keyPrefix + 'global_cassa_taxable'],
            'amount_global_cassa_taxable': bundle.inputData?.[keyPrefix + 'amount_global_cassa_taxable'],
            'withholding_tax': bundle.inputData?.[keyPrefix + 'withholding_tax'],
            'withholding_tax_taxable': bundle.inputData?.[keyPrefix + 'withholding_tax_taxable'],
            'other_withholding_tax': bundle.inputData?.[keyPrefix + 'other_withholding_tax'],
            'stamp_duty': bundle.inputData?.[keyPrefix + 'stamp_duty'],
            'payment_method': utils.removeIfEmpty(PaymentMethodMapping(bundle, keyPrefix + 'payment_method')),
            'use_split_payment': bundle.inputData?.[keyPrefix + 'use_split_payment'],
            'use_gross_prices': bundle.inputData?.[keyPrefix + 'use_gross_prices'],
            'e_invoice': bundle.inputData?.[keyPrefix + 'e_invoice'],
            'ei_data': utils.removeIfEmpty(IssuedDocument_ei_dataMapping(bundle, keyPrefix + 'ei_data')),
            'ei_cassa_type': bundle.inputData?.[keyPrefix + 'ei_cassa_type'],
            'ei_cassa2_type': bundle.inputData?.[keyPrefix + 'ei_cassa2_type'],
            'ei_withholding_tax_causal': bundle.inputData?.[keyPrefix + 'ei_withholding_tax_causal'],
            'ei_other_withholding_tax_type': bundle.inputData?.[keyPrefix + 'ei_other_withholding_tax_type'],
            'ei_other_withholding_tax_causal': bundle.inputData?.[keyPrefix + 'ei_other_withholding_tax_causal'],
            'items_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'items_list']),
            'payments_list': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'payments_list']),
            'template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, keyPrefix + 'template')),
            'delivery_note_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, keyPrefix + 'delivery_note_template')),
            'acc_inv_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, keyPrefix + 'acc_inv_template')),
            'h_margins': bundle.inputData?.[keyPrefix + 'h_margins'],
            'v_margins': bundle.inputData?.[keyPrefix + 'v_margins'],
            'show_payments': bundle.inputData?.[keyPrefix + 'show_payments'],
            'show_payment_method': bundle.inputData?.[keyPrefix + 'show_payment_method'],
            'show_totals': bundle.inputData?.[keyPrefix + 'show_totals'],
            'show_paypal_button': bundle.inputData?.[keyPrefix + 'show_paypal_button'],
            'show_notification_button': bundle.inputData?.[keyPrefix + 'show_notification_button'],
            'show_tspay_button': bundle.inputData?.[keyPrefix + 'show_tspay_button'],
            'delivery_note': bundle.inputData?.[keyPrefix + 'delivery_note'],
            'accompanying_invoice': bundle.inputData?.[keyPrefix + 'accompanying_invoice'],
            'dn_number': bundle.inputData?.[keyPrefix + 'dn_number'],
            'dn_date': bundle.inputData?.[keyPrefix + 'dn_date'],
            'dn_ai_packages_number': bundle.inputData?.[keyPrefix + 'dn_ai_packages_number'],
            'dn_ai_weight': bundle.inputData?.[keyPrefix + 'dn_ai_weight'],
            'dn_ai_causal': bundle.inputData?.[keyPrefix + 'dn_ai_causal'],
            'dn_ai_destination': bundle.inputData?.[keyPrefix + 'dn_ai_destination'],
            'dn_ai_transporter': bundle.inputData?.[keyPrefix + 'dn_ai_transporter'],
            'dn_ai_notes': bundle.inputData?.[keyPrefix + 'dn_ai_notes'],
            'is_marked': bundle.inputData?.[keyPrefix + 'is_marked'],
            'amount_net': bundle.inputData?.[keyPrefix + 'amount_net'],
            'amount_vat': bundle.inputData?.[keyPrefix + 'amount_vat'],
            'amount_gross': bundle.inputData?.[keyPrefix + 'amount_gross'],
            'amount_due_discount': bundle.inputData?.[keyPrefix + 'amount_due_discount'],
            'amount_rivalsa': bundle.inputData?.[keyPrefix + 'amount_rivalsa'],
            'amount_rivalsa_taxable': bundle.inputData?.[keyPrefix + 'amount_rivalsa_taxable'],
            'amount_withholding_tax': bundle.inputData?.[keyPrefix + 'amount_withholding_tax'],
            'amount_withholding_tax_taxable': bundle.inputData?.[keyPrefix + 'amount_withholding_tax_taxable'],
            'amount_other_withholding_tax': bundle.inputData?.[keyPrefix + 'amount_other_withholding_tax'],
            'amount_other_withholding_tax_taxable': bundle.inputData?.[keyPrefix + 'amount_other_withholding_tax_taxable'],
            'amount_enasarco_taxable': bundle.inputData?.[keyPrefix + 'amount_enasarco_taxable'],
            'extra_data': utils.removeIfEmpty(IssuedDocument_extra_dataMapping(bundle, keyPrefix + 'extra_data')),
            'seen_date': bundle.inputData?.[keyPrefix + 'seen_date'],
            'next_due_date': bundle.inputData?.[keyPrefix + 'next_due_date'],
            'url': bundle.inputData?.[keyPrefix + 'url'],
            'dn_url': bundle.inputData?.[keyPrefix + 'dn_url'],
            'ai_url': bundle.inputData?.[keyPrefix + 'ai_url'],
            'attachment_url': bundle.inputData?.[keyPrefix + 'attachment_url'],
            'attachment_token': bundle.inputData?.[keyPrefix + 'attachment_token'],
            'ei_raw': bundle.inputData?.[keyPrefix + 'ei_raw'],
            'ei_status': bundle.inputData?.[keyPrefix + 'ei_status'],
            'created_at': bundle.inputData?.[keyPrefix + 'created_at'],
            'updated_at': bundle.inputData?.[keyPrefix + 'updated_at'],
        }
    },
}
