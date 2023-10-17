const utils = require('../utils/utils');
const SupplierType = require('../models/SupplierType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `Supplier id - [${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `Supplier code - [${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `Supplier name - [${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                ...SupplierType.fields(`${keyPrefix}type`, isInput),
            },
            {
                key: `${keyPrefix}first_name`,
                label: `Supplier first name - [${labelPrefix}first_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}last_name`,
                label: `Supplier last name - [${labelPrefix}last_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contact_person`,
                label: `Supplier contact person - [${labelPrefix}contact_person]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vat_number`,
                label: `Supplier vat number - [${labelPrefix}vat_number]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tax_code`,
                label: `Supplier tax code - [${labelPrefix}tax_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_street`,
                label: `Supplier street address - [${labelPrefix}address_street]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_postal_code`,
                label: `Supplier postal code - [${labelPrefix}address_postal_code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_city`,
                label: `Supplier city - [${labelPrefix}address_city]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_province`,
                label: `Supplier province - [${labelPrefix}address_province]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address_extra`,
                label: `Supplier address extra info - [${labelPrefix}address_extra]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country`,
                label: `Supplier country - [${labelPrefix}country]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}country_iso`,
                label: `Supplier country iso code - [${labelPrefix}country_iso]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `Supplier email - [${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}certified_email`,
                label: `Supplier certified email - [${labelPrefix}certified_email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `Supplier phone - [${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fax`,
                label: `Supplier fax - [${labelPrefix}fax]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `Supplier extra notes - [${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank_iban`,
                label: `Supplier bank IBAN - [${labelPrefix}bank_iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `Supplier creation date - [${labelPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}updated_at`,
                label: `Supplier last update date - [${labelPrefix}updated_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'first_name': bundle.inputData?.[`${keyPrefix}first_name`],
            'last_name': bundle.inputData?.[`${keyPrefix}last_name`],
            'contact_person': bundle.inputData?.[`${keyPrefix}contact_person`],
            'vat_number': bundle.inputData?.[`${keyPrefix}vat_number`],
            'tax_code': bundle.inputData?.[`${keyPrefix}tax_code`],
            'address_street': bundle.inputData?.[`${keyPrefix}address_street`],
            'address_postal_code': bundle.inputData?.[`${keyPrefix}address_postal_code`],
            'address_city': bundle.inputData?.[`${keyPrefix}address_city`],
            'address_province': bundle.inputData?.[`${keyPrefix}address_province`],
            'address_extra': bundle.inputData?.[`${keyPrefix}address_extra`],
            'country': bundle.inputData?.[`${keyPrefix}country`],
            'country_iso': bundle.inputData?.[`${keyPrefix}country_iso`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'certified_email': bundle.inputData?.[`${keyPrefix}certified_email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'fax': bundle.inputData?.[`${keyPrefix}fax`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'bank_iban': bundle.inputData?.[`${keyPrefix}bank_iban`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'updated_at': bundle.inputData?.[`${keyPrefix}updated_at`],
        }
    },
}
