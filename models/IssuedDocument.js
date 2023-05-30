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
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}id`,
                label: `Unique identifier of the document. - [${keyPrefix}id]`,
                type: 'integer',
            },
            ...Entity(`${keyPrefix}entity`),
            {
                key: `${keyPrefix}type`,
                ...IssuedDocumentType(`${keyPrefix}type`),
            },
            {
                key: `${keyPrefix}number`,
                label: `Number of the document [If not specified, next number is used] - [${keyPrefix}number]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}numeration`,
                label: `Numeration of the document [Not available if type&#x3D;delivery_note] - [${keyPrefix}numeration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `Date of the document [If not specified, today date is used] - [${keyPrefix}date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}year`,
                label: `Invoice year. - [${keyPrefix}year]`,
                type: 'integer',
            },
            ...Currency(`${keyPrefix}currency`),
            ...Language(`${keyPrefix}language`),
            {
                key: `${keyPrefix}subject`,
                label: `Issued document subject. - [${keyPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}visible_subject`,
                label: `Issued document visible subject. - [${keyPrefix}visible_subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rc_center`,
                label: `Revenue center [or cost center if type&#x3D;supplier_order]. - [${keyPrefix}rc_center]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Issued document extra notes. - [${keyPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rivalsa`,
                label: `\&quot;Rivalsa INPS\&quot; percentual value - [${keyPrefix}rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa`,
                label: `\&quot;Cassa previdenziale\&quot; percentual value - [${keyPrefix}cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa`,
                label: `[Read Only] Cassa amount. - [${keyPrefix}amount_cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa_taxable`,
                label: `Cassa taxable percentage - [${keyPrefix}cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa_taxable`,
                label: `[Can be set only if cassa_taxable is NULL] Cassa2 taxable amount - [${keyPrefix}amount_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa2`,
                label: `\&quot;Cassa previdenziale 2\&quot; percentual value - [${keyPrefix}cassa2]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa2`,
                label: `[Read Only] Cassa amount. - [${keyPrefix}amount_cassa2]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa2_taxable`,
                label: `Cassa2 taxable percentage - [${keyPrefix}cassa2_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa2_taxable`,
                label: `[Can be set only if cassa2_taxable is NULL] Cassa2 taxable amount - [${keyPrefix}amount_cassa2_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}global_cassa_taxable`,
                label: `Global cassa taxable percentage - [${keyPrefix}global_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_global_cassa_taxable`,
                label: `[Can be set only if global_cassa_taxable is NULL] Global cassa taxable amount - [${keyPrefix}amount_global_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withholding_tax`,
                label: `Withholding tax (ritenuta d&#39;acconto) percentual value - [${keyPrefix}withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withholding_tax_taxable`,
                label: `Withholding tax taxable (imponibile) percentual value - [${keyPrefix}withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}other_withholding_tax`,
                label: `Other withholding tax (altra ritenuta) percentual value - [${keyPrefix}other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}stamp_duty`,
                label: `Stamp duty value [0 if not present] - [${keyPrefix}stamp_duty]`,
                type: 'number',
            },
            ...PaymentMethod(`${keyPrefix}payment_method`),
            {
                key: `${keyPrefix}use_split_payment`,
                label: `Use split payment - [${keyPrefix}use_split_payment]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}use_gross_prices`,
                label: `Use gross prices - [${keyPrefix}use_gross_prices]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Indicates if this is an e-invoice. - [${keyPrefix}e_invoice]`,
                type: 'boolean',
            },
            ...IssuedDocument_ei_data(`${keyPrefix}ei_data`),
            {
                key: `${keyPrefix}ei_cassa_type`,
                label: `E-invoice cassa type - [${keyPrefix}ei_cassa_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_cassa2_type`,
                label: `E-invoice cassa2 type - [${keyPrefix}ei_cassa2_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_withholding_tax_causal`,
                label: `E-invoice withholding tax causal - [${keyPrefix}ei_withholding_tax_causal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_other_withholding_tax_type`,
                label: `E-invoice other withholding tax type - [${keyPrefix}ei_other_withholding_tax_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_other_withholding_tax_causal`,
                label: `E-invoice other withholding tax causal - [${keyPrefix}ei_other_withholding_tax_causal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}items_list`,
                label: `${keyPrefix}items_list]`,
                children: IssuedDocumentItemsListItem(`${keyPrefix}items_list`), 
            },
            {
                key: `${keyPrefix}payments_list`,
                label: `${keyPrefix}payments_list]`,
                children: IssuedDocumentPaymentsListItem(`${keyPrefix}payments_list`), 
            },
            ...DocumentTemplate(`${keyPrefix}template`),
            ...DocumentTemplate(`${keyPrefix}delivery_note_template`),
            ...DocumentTemplate(`${keyPrefix}acc_inv_template`),
            {
                key: `${keyPrefix}h_margins`,
                label: `Horizontal margins. - [${keyPrefix}h_margins]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}v_margins`,
                label: `Vertical margins. - [${keyPrefix}v_margins]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}show_payments`,
                label: `Shows the expiration dates of the payments on the document. - [${keyPrefix}show_payments]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_payment_method`,
                label: `Show the payment method details on the document. - [${keyPrefix}show_payment_method]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_totals`,
                ...ShowTotalsMode(`${keyPrefix}show_totals`),
            },
            {
                key: `${keyPrefix}show_paypal_button`,
                label: `Show paypal button - [${keyPrefix}show_paypal_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_notification_button`,
                label: `Show notification button - [${keyPrefix}show_notification_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_tspay_button`,
                label: `Show ts pay button. - [${keyPrefix}show_tspay_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}delivery_note`,
                label: `[${keyPrefix}delivery_note]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accompanying_invoice`,
                label: `Attach an accompanying invoice. - [${keyPrefix}accompanying_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}dn_number`,
                label: `Number (for the attached delivery note). - [${keyPrefix}dn_number]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}dn_date`,
                label: `Date (for the attached delivery note). - [${keyPrefix}dn_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}dn_ai_packages_number`,
                label: `Number of packages (for the attached delivery note). - [${keyPrefix}dn_ai_packages_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_weight`,
                label: `Weight (for the attached delivery note). - [${keyPrefix}dn_ai_weight]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_causal`,
                label: `Causal (for the attached delivery note). - [${keyPrefix}dn_ai_causal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_destination`,
                label: `Destination (for the attached delivery note). - [${keyPrefix}dn_ai_destination]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_transporter`,
                label: `Transporter (for the attached delivery note). - [${keyPrefix}dn_ai_transporter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_notes`,
                label: `Notes (for the attached delivery note). - [${keyPrefix}dn_ai_notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_marked`,
                label: `This is true if the document is marked. - [${keyPrefix}is_marked]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `[Read Only] Total net amount (competenze). - [${keyPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `[Read Only] Total vat amount (IVA). - [${keyPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `[Read Only] Total gross amount (totale documento). - [${keyPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_due_discount`,
                label: `Amount due discount - [${keyPrefix}amount_due_discount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_rivalsa`,
                label: `[Read Only] Rivalsa amount. - [${keyPrefix}amount_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_rivalsa_taxable`,
                label: `Taxable rivalsa amount - [${keyPrefix}amount_rivalsa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax`,
                label: `[Read Only] Withholding tax amount (ritenuta d&#39;acconto). - [${keyPrefix}amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax_taxable`,
                label: `Taxable withholding tax amount - [${keyPrefix}amount_withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax`,
                label: `[Read Only] Other withholding tax amount (altra ritenuta). - [${keyPrefix}amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax_taxable`,
                label: `Taxable other withholding tax amount - [${keyPrefix}amount_other_withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_enasarco_taxable`,
                label: `Taxable enasarco amount - [${keyPrefix}amount_enasarco_taxable]`,
                type: 'number',
            },
            ...IssuedDocument_extra_data(`${keyPrefix}extra_data`),
            {
                key: `${keyPrefix}seen_date`,
                label: `Date when the client/supplier has seen the document. - [${keyPrefix}seen_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}next_due_date`,
                label: `Date of the next not paid payment. - [${keyPrefix}next_due_date]`,
                type: 'datetime',
            },
            {
                key: `${keyPrefix}url`,
                label: `[Temporary] [Read Only]   Public url of the document PDF file. - [${keyPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_url`,
                label: `[Temporary] [Read Only]   Public url of the attached delivery note PDF file. - [${keyPrefix}dn_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ai_url`,
                label: `[Temporary] [Read Only]   Public url of the accompanying invoice PDF file. - [${keyPrefix}ai_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}. - [${keyPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_token`,
                label: `[Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded. - [${keyPrefix}attachment_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Advanced raw attributes for e-invoices. - [${keyPrefix}ei_raw]`,
                dict: true,
            },
            {
                key: `${keyPrefix}ei_status`,
                label: `[Read only] Status of the e-invoice.   * &#x60;attempt&#x60; - We are trying to send the invoice, please wait up to 2 hours   * &#x60;missing&#x60; - The invoice is missing   * &#x60;not_sent&#x60; - The invoice has yet to be sent   * &#x60;sent&#x60; - The invoice was sent   * &#x60;pending&#x60; - The checks for the digital signature and sending are in progress   * &#x60;processing&#x60; - The SDI is delivering the invoice to the customer   * &#x60;error&#x60; - An error occurred while handling the invoice, please try to resend it or contact support   * &#x60;discarded&#x60; - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * &#x60;not_delivered&#x60; - The SDI was unable to deliver the invoice   * &#x60;accepted&#x60; - The customer accepted the invoice   * &#x60;rejected&#x60; - The customer rejected the invoice, so it must be corrected   * &#x60;no_response&#x60; - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice   * &#x60;manual_accepted&#x60; - The customer accepted the invoice   * &#x60;manual_rejected&#x60; - The customer rejected the invoice  - [${keyPrefix}ei_status]`,
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
            'entity': utils.removeIfEmpty(EntityMapping(bundle, `${keyPrefix}entity`)),
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'number': bundle.inputData?.[`${keyPrefix}number`],
            'numeration': bundle.inputData?.[`${keyPrefix}numeration`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'currency': utils.removeIfEmpty(CurrencyMapping(bundle, `${keyPrefix}currency`)),
            'language': utils.removeIfEmpty(LanguageMapping(bundle, `${keyPrefix}language`)),
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'visible_subject': bundle.inputData?.[`${keyPrefix}visible_subject`],
            'rc_center': bundle.inputData?.[`${keyPrefix}rc_center`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'rivalsa': bundle.inputData?.[`${keyPrefix}rivalsa`],
            'cassa': bundle.inputData?.[`${keyPrefix}cassa`],
            'amount_cassa': bundle.inputData?.[`${keyPrefix}amount_cassa`],
            'cassa_taxable': bundle.inputData?.[`${keyPrefix}cassa_taxable`],
            'amount_cassa_taxable': bundle.inputData?.[`${keyPrefix}amount_cassa_taxable`],
            'cassa2': bundle.inputData?.[`${keyPrefix}cassa2`],
            'amount_cassa2': bundle.inputData?.[`${keyPrefix}amount_cassa2`],
            'cassa2_taxable': bundle.inputData?.[`${keyPrefix}cassa2_taxable`],
            'amount_cassa2_taxable': bundle.inputData?.[`${keyPrefix}amount_cassa2_taxable`],
            'global_cassa_taxable': bundle.inputData?.[`${keyPrefix}global_cassa_taxable`],
            'amount_global_cassa_taxable': bundle.inputData?.[`${keyPrefix}amount_global_cassa_taxable`],
            'withholding_tax': bundle.inputData?.[`${keyPrefix}withholding_tax`],
            'withholding_tax_taxable': bundle.inputData?.[`${keyPrefix}withholding_tax_taxable`],
            'other_withholding_tax': bundle.inputData?.[`${keyPrefix}other_withholding_tax`],
            'stamp_duty': bundle.inputData?.[`${keyPrefix}stamp_duty`],
            'payment_method': utils.removeIfEmpty(PaymentMethodMapping(bundle, `${keyPrefix}payment_method`)),
            'use_split_payment': bundle.inputData?.[`${keyPrefix}use_split_payment`],
            'use_gross_prices': bundle.inputData?.[`${keyPrefix}use_gross_prices`],
            'e_invoice': bundle.inputData?.[`${keyPrefix}e_invoice`],
            'ei_data': utils.removeIfEmpty(IssuedDocument_ei_dataMapping(bundle, `${keyPrefix}ei_data`)),
            'ei_cassa_type': bundle.inputData?.[`${keyPrefix}ei_cassa_type`],
            'ei_cassa2_type': bundle.inputData?.[`${keyPrefix}ei_cassa2_type`],
            'ei_withholding_tax_causal': bundle.inputData?.[`${keyPrefix}ei_withholding_tax_causal`],
            'ei_other_withholding_tax_type': bundle.inputData?.[`${keyPrefix}ei_other_withholding_tax_type`],
            'ei_other_withholding_tax_causal': bundle.inputData?.[`${keyPrefix}ei_other_withholding_tax_causal`],
            'items_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}items_list`]),
            'payments_list': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}payments_list`]),
            'template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, `${keyPrefix}template`)),
            'delivery_note_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, `${keyPrefix}delivery_note_template`)),
            'acc_inv_template': utils.removeIfEmpty(DocumentTemplateMapping(bundle, `${keyPrefix}acc_inv_template`)),
            'h_margins': bundle.inputData?.[`${keyPrefix}h_margins`],
            'v_margins': bundle.inputData?.[`${keyPrefix}v_margins`],
            'show_payments': bundle.inputData?.[`${keyPrefix}show_payments`],
            'show_payment_method': bundle.inputData?.[`${keyPrefix}show_payment_method`],
            'show_totals': bundle.inputData?.[`${keyPrefix}show_totals`],
            'show_paypal_button': bundle.inputData?.[`${keyPrefix}show_paypal_button`],
            'show_notification_button': bundle.inputData?.[`${keyPrefix}show_notification_button`],
            'show_tspay_button': bundle.inputData?.[`${keyPrefix}show_tspay_button`],
            'delivery_note': bundle.inputData?.[`${keyPrefix}delivery_note`],
            'accompanying_invoice': bundle.inputData?.[`${keyPrefix}accompanying_invoice`],
            'dn_number': bundle.inputData?.[`${keyPrefix}dn_number`],
            'dn_date': bundle.inputData?.[`${keyPrefix}dn_date`],
            'dn_ai_packages_number': bundle.inputData?.[`${keyPrefix}dn_ai_packages_number`],
            'dn_ai_weight': bundle.inputData?.[`${keyPrefix}dn_ai_weight`],
            'dn_ai_causal': bundle.inputData?.[`${keyPrefix}dn_ai_causal`],
            'dn_ai_destination': bundle.inputData?.[`${keyPrefix}dn_ai_destination`],
            'dn_ai_transporter': bundle.inputData?.[`${keyPrefix}dn_ai_transporter`],
            'dn_ai_notes': bundle.inputData?.[`${keyPrefix}dn_ai_notes`],
            'is_marked': bundle.inputData?.[`${keyPrefix}is_marked`],
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'amount_due_discount': bundle.inputData?.[`${keyPrefix}amount_due_discount`],
            'amount_rivalsa': bundle.inputData?.[`${keyPrefix}amount_rivalsa`],
            'amount_rivalsa_taxable': bundle.inputData?.[`${keyPrefix}amount_rivalsa_taxable`],
            'amount_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_withholding_tax`],
            'amount_withholding_tax_taxable': bundle.inputData?.[`${keyPrefix}amount_withholding_tax_taxable`],
            'amount_other_withholding_tax': bundle.inputData?.[`${keyPrefix}amount_other_withholding_tax`],
            'amount_other_withholding_tax_taxable': bundle.inputData?.[`${keyPrefix}amount_other_withholding_tax_taxable`],
            'amount_enasarco_taxable': bundle.inputData?.[`${keyPrefix}amount_enasarco_taxable`],
            'extra_data': utils.removeIfEmpty(IssuedDocument_extra_dataMapping(bundle, `${keyPrefix}extra_data`)),
            'seen_date': bundle.inputData?.[`${keyPrefix}seen_date`],
            'next_due_date': bundle.inputData?.[`${keyPrefix}next_due_date`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'dn_url': bundle.inputData?.[`${keyPrefix}dn_url`],
            'ai_url': bundle.inputData?.[`${keyPrefix}ai_url`],
            'attachment_url': bundle.inputData?.[`${keyPrefix}attachment_url`],
            'attachment_token': bundle.inputData?.[`${keyPrefix}attachment_token`],
            'ei_raw': bundle.inputData?.[`${keyPrefix}ei_raw`],
            'ei_status': bundle.inputData?.[`${keyPrefix}ei_status`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
