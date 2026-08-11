const utils = require('../utils/utils');
const Attachment = require('../models/Attachment');
const Currency = require('../models/Currency');
const PendingReceivedDocumentPaymentsListItem = require('../models/PendingReceivedDocumentPaymentsListItem');
const PendingReceivedDocumentType = require('../models/PendingReceivedDocumentType');
const PendingReceivedDocument_extracted_data = require('../models/PendingReceivedDocument_extracted_data');
const ReceivedDocumentType = require('../models/ReceivedDocumentType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Pending received document id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}date`,
                label: `Pending received document date - [${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `Pending received document subject - [${labelPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}filename`,
                label: `Pending received document filename - [${labelPrefix}filename]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...PendingReceivedDocumentType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}attachment_url`,
                label: `[Temporary] [Read Only] Pending received document url of the attached file - [${labelPrefix}attachment_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount_gross`,
                label: `[Read Only] Pending received document total gross amount - [${labelPrefix}amount_gross]`,
                type: 'number',
            },
            ...Currency.fields(`${keyPrefix}currency`, isInput),
            {
                key: `${keyPrefix}document_type`,
                ...ReceivedDocumentType.fields(`${keyPrefix}document_type`, isInput),
            },
            {
                key: `${keyPrefix}supplier_name`,
                label: `Pending received document supplier name - [${labelPrefix}supplier_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cost_center`,
                label: `Pending received document cost center - [${labelPrefix}cost_center]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `Pending received document category - [${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}other_attachments`,
                label: `[${labelPrefix}other_attachments]`,
                children: Attachment.fields(`${keyPrefix}other_attachments${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}emssion_date`,
                label: `Pending received document emission date - [${labelPrefix}emssion_date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}payments_list`,
                label: `[${labelPrefix}payments_list]`,
                children: PendingReceivedDocumentPaymentsListItem.fields(`${keyPrefix}payments_list${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}amount_net`,
                label: `Pending received document total net amount - [${labelPrefix}amount_net]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amount_vat`,
                label: `Pending received document total vat amount - [${labelPrefix}amount_vat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}import_error`,
                label: `Pending received document import error - [${labelPrefix}import_error]`,
                type: 'string',
            },
            ...PendingReceivedDocument_extracted_data.fields(`${keyPrefix}extracted_data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'filename': bundle.inputData?.[`${keyPrefix}filename`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'attachment_url': bundle.inputData?.[`${keyPrefix}attachment_url`],
            'amount_gross': bundle.inputData?.[`${keyPrefix}amount_gross`],
            'currency': utils.removeIfEmpty(Currency.mapping(bundle, `${keyPrefix}currency`)),
            'document_type': bundle.inputData?.[`${keyPrefix}document_type`],
            'supplier_name': bundle.inputData?.[`${keyPrefix}supplier_name`],
            'cost_center': bundle.inputData?.[`${keyPrefix}cost_center`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'other_attachments': utils.childMapping(bundle.inputData?.[`${keyPrefix}other_attachments`], `${keyPrefix}other_attachments`, Attachment),
            'emssion_date': bundle.inputData?.[`${keyPrefix}emssion_date`],
            'payments_list': utils.childMapping(bundle.inputData?.[`${keyPrefix}payments_list`], `${keyPrefix}payments_list`, PendingReceivedDocumentPaymentsListItem),
            'amount_net': bundle.inputData?.[`${keyPrefix}amount_net`],
            'amount_vat': bundle.inputData?.[`${keyPrefix}amount_vat`],
            'import_error': bundle.inputData?.[`${keyPrefix}import_error`],
            'extracted_data': utils.removeIfEmpty(PendingReceivedDocument_extracted_data.mapping(bundle, `${keyPrefix}extracted_data`)),
        }
    },
}
