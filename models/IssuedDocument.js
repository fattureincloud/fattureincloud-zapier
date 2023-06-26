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
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}id`,
                label: `Issued document id - [${labelPrefix}id]`,
                type: 'integer',
            },
            ...Entity(`${keyPrefix}entity`, isInput),
            {
                key: `${keyPrefix}type`,
                ...IssuedDocumentType(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}number`,
                label: `Issued document number [If not specified, next number is used] - [${labelPrefix}number]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}numeration`,
                label: `Issued document numeration [Not available if type=delivery_note] - [${labelPrefix}numeration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `Issued document date [defaults to today's date] - [${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `Issued document year - [${labelPrefix}year]`,
                type: 'integer',
            },
            ...Currency(`${keyPrefix}currency`, isInput),
            ...Language(`${keyPrefix}language`, isInput),
            {
                key: `${keyPrefix}subject`,
                label: `Issued document subject - [${labelPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}visible_subject`,
                label: `Issued document visible subject - [${labelPrefix}visible_subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rc_center`,
                label: `Issued document revenue center [or cost center if type=supplier_order]. - [${labelPrefix}rc_center]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Issued document extra notes - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rivalsa`,
                label: `Issued document \"Rivalsa INPS\" percentual value - [${labelPrefix}rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa`,
                label: `Issued document \"Cassa previdenziale\" percentual value - [${labelPrefix}cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa`,
                label: `[Read Only] Issued document cassa amount. - [${labelPrefix}amount_cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa_taxable`,
                label: `Issued document cassa taxable percentage - [${labelPrefix}cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa_taxable`,
                label: `[Can be set only if cassa_taxable is NULL] Issued document cassa taxable amount - [${labelPrefix}amount_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa2`,
                label: `Issued document \"Cassa previdenziale 2\" percentual value - [${labelPrefix}cassa2]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa2`,
                label: `[Read Only] Issued document cassa2 amount - [${labelPrefix}amount_cassa2]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa2_taxable`,
                label: `Issued document cassa2 taxable percentage - [${labelPrefix}cassa2_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_cassa2_taxable`,
                label: `[Can be set only if cassa2_taxable is NULL] Issued document cassa2 taxable amount - [${labelPrefix}amount_cassa2_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}global_cassa_taxable`,
                label: `Issued document global cassa taxable percentage - [${labelPrefix}global_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_global_cassa_taxable`,
                label: `[Can be set only if global_cassa_taxable is NULL] Issued document global cassa taxable amount - [${labelPrefix}amount_global_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withholding_tax`,
                label: `Issued document withholding tax (ritenuta d'acconto) percentual value - [${labelPrefix}withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withholding_tax_taxable`,
                label: `Issued document withholding tax taxable (imponibile) percentual value - [${labelPrefix}withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}other_withholding_tax`,
                label: `Issued document other withholding tax (altra ritenuta) percentual value - [${labelPrefix}other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}stamp_duty`,
                label: `Issued document stamp duty value [0 if not present] - [${labelPrefix}stamp_duty]`,
                type: 'number',
            },
            ...PaymentMethod(`${keyPrefix}payment_method`, isInput),
            {
                key: `${keyPrefix}use_split_payment`,
                label: `Issued document uses split payment - [${labelPrefix}use_split_payment]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}use_gross_prices`,
                label: `Issued document uses gross prices - [${labelPrefix}use_gross_prices]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}e_invoice`,
                label: `Issued document is an e-invoice. - [${labelPrefix}e_invoice]`,
                type: 'boolean',
            },
            ...IssuedDocument_ei_data(`${keyPrefix}ei_data`, isInput),
            {
                key: `${keyPrefix}ei_cassa_type`,
                label: `E-invoice cassa type - [${labelPrefix}ei_cassa_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_cassa2_type`,
                label: `E-invoice cassa2 type - [${labelPrefix}ei_cassa2_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_withholding_tax_causal`,
                label: `E-invoice withholding tax causal - [${labelPrefix}ei_withholding_tax_causal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_other_withholding_tax_type`,
                label: `E-invoice other withholding tax type - [${labelPrefix}ei_other_withholding_tax_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_other_withholding_tax_causal`,
                label: `E-invoice other withholding tax causal - [${labelPrefix}ei_other_withholding_tax_causal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}items_list`,
                label: `${labelPrefix}items_list]`,
                children: IssuedDocumentItemsListItem(`${keyPrefix}items_list${!isInput && '[]'}`), 
            },
            {
                key: `${keyPrefix}payments_list`,
                label: `${labelPrefix}payments_list]`,
                children: IssuedDocumentPaymentsListItem(`${keyPrefix}payments_list${!isInput && '[]'}`), 
            },
            ...DocumentTemplate(`${keyPrefix}template`, isInput),
            ...DocumentTemplate(`${keyPrefix}delivery_note_template`, isInput),
            ...DocumentTemplate(`${keyPrefix}acc_inv_template`, isInput),
            {
                key: `${keyPrefix}h_margins`,
                label: `Issued document PDF horizontal margins - [${labelPrefix}h_margins]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}v_margins`,
                label: `Issued document PDF vertical margins - [${labelPrefix}v_margins]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}show_payments`,
                label: `Show the expiration dates of the payments on the document - [${labelPrefix}show_payments]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_payment_method`,
                label: `Show the payment method details on the document - [${labelPrefix}show_payment_method]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_totals`,
                ...ShowTotalsMode(`${keyPrefix}show_totals`, isInput),
            },
            {
                key: `${keyPrefix}show_paypal_button`,
                label: `Show paypal button in the PDF - [${labelPrefix}show_paypal_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_notification_button`,
                label: `Show notification button in the PDF - [${labelPrefix}show_notification_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}show_tspay_button`,
                label: `Show ts pay button in the PDF - [${labelPrefix}show_tspay_button]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}delivery_note`,
                label: `Issued document has delivery note - [${labelPrefix}delivery_note]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accompanying_invoice`,
                label: `Issued document has an accompanying invoice - [${labelPrefix}accompanying_invoice]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}dn_number`,
                label: `Issued document attached delivery note number - [${labelPrefix}dn_number]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}dn_date`,
                label: `Issued document attached delivery note date - [${labelPrefix}dn_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_packages_number`,
                label: `Issued document attached delivery note number of packages - [${labelPrefix}dn_ai_packages_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_weight`,
                label: `Issued document attached delivery note package weight - [${labelPrefix}dn_ai_weight]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_causal`,
                label: `Issued document attached delivery note causal - [${labelPrefix}dn_ai_causal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_destination`,
                label: `Issued document attached delivery note destination - [${labelPrefix}dn_ai_destination]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_transporter`,
                label: `Issued document attached delivery note transporter - [${labelPrefix}dn_ai_transporter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_ai_notes`,
                label: `Issued document attached delivery note notes - [${labelPrefix}dn_ai_notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_marked`,
                label: `Issued document is marked - [${labelPrefix}is_marked]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `[Read only] Issued document total net amount - [${labelPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `[Read Only] Issued document total vat amount - [${labelPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `[Read Only] Issued document total gross amount - [${labelPrefix}amount_gross]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_due_discount`,
                label: `Issued document amount due discount - [${labelPrefix}amount_due_discount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_rivalsa`,
                label: `[Read Only] Issued document rivalsa amount - [${labelPrefix}amount_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_rivalsa_taxable`,
                label: `Issued document taxable rivalsa amount - [${labelPrefix}amount_rivalsa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax`,
                label: `[Read Only] Issued document withholding tax amount (ritenuta d'acconto). - [${labelPrefix}amount_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_withholding_tax_taxable`,
                label: `Issued document taxable withholding tax amount - [${labelPrefix}amount_withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax`,
                label: `[Read Only] Issued document other withholding tax amount (altra ritenuta) - [${labelPrefix}amount_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_other_withholding_tax_taxable`,
                label: `Issued document taxable other withholding tax amount - [${labelPrefix}amount_other_withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_enasarco_taxable`,
                label: `Issued document taxable enasarco amount - [${labelPrefix}amount_enasarco_taxable]`,
                type: 'number',
            },
            ...IssuedDocument_extra_data(`${keyPrefix}extra_data`, isInput),
            {
                key: `${keyPrefix}seen_date`,
                label: `Issued document seen date - [${labelPrefix}seen_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}next_due_date`,
                label: `Issued document date of the next not paid payment - [${labelPrefix}next_due_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[Temporary] [Read Only] Issued document url of the document PDF file - [${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dn_url`,
                label: `[Temporary] [Read Only] Issued document url of the attached delivery note PDF file - [${labelPrefix}dn_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ai_url`,
                label: `[Temporary] [Read Only] Issued document url of the accompanying invoice PDF file - [${labelPrefix}ai_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only] Issued document url of the attached file - [${labelPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachment_token`,
                label: `[Write Only] Issued document attachment token returned by POST /issued_documents/attachment - [${labelPrefix}attachment_token]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ei_raw`,
                label: `Issued document advanced raw attributes for e-invoices - [${labelPrefix}ei_raw]`,
                dict: true,
            },
            {
                key: `${keyPrefix}ei_status`,
                label: `[Read only] Status of the e-invoice.   * **attempt** - We are trying to send the invoice, please wait up to 2 hours   * **missing** - The invoice is missing   * **not_sent** - The invoice has yet to be sent   * **sent** - The invoice was sent   * **pending** - The checks for the digital signature and sending are in progress   * **processing** - The SDI is delivering the invoice to the customer   * **error** - An error occurred while handling the invoice, please try to resend it or contact support   * **discarded** - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * **not_delivered** - The SDI was unable to deliver the invoice   * **accepted** - The customer accepted the invoice   * **rejected** - The customer rejected the invoice, so it must be corrected   * **no_response** - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice   * **manual_accepted** - The customer accepted the invoice   * **manual_rejected** - The customer rejected the invoice  - [${labelPrefix}ei_status]`,
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
                label: `Issued document creation date - [${labelPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Issued document last update date - [${labelPrefix}updated_at]`,
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
