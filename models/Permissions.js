const _ = require('lodash')
const utils = require('../utils/utils');
const PermissionLevel = require('./PermissionLevel').fields;
const Permissions_fic_issued_documents_detailed = require('./Permissions_fic_issued_documents_detailed').fields;
const Permissions_fic_issued_documents_detailedMapping = require('./Permissions_fic_issued_documents_detailed').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}fic_situation`,
                ...PermissionLevel(`${keyPrefix}fic_situation`),
            },
            {
                key: `${keyPrefix}fic_clients`,
                ...PermissionLevel(`${keyPrefix}fic_clients`),
            },
            {
                key: `${keyPrefix}fic_suppliers`,
                ...PermissionLevel(`${keyPrefix}fic_suppliers`),
            },
            {
                key: `${keyPrefix}fic_products`,
                ...PermissionLevel(`${keyPrefix}fic_products`),
            },
            {
                key: `${keyPrefix}fic_issued_documents`,
                ...PermissionLevel(`${keyPrefix}fic_issued_documents`),
            },
            {
                key: `${keyPrefix}fic_received_documents`,
                ...PermissionLevel(`${keyPrefix}fic_received_documents`),
            },
            {
                key: `${keyPrefix}fic_receipts`,
                ...PermissionLevel(`${keyPrefix}fic_receipts`),
            },
            {
                key: `${keyPrefix}fic_calendar`,
                ...PermissionLevel(`${keyPrefix}fic_calendar`),
            },
            {
                key: `${keyPrefix}fic_archive`,
                ...PermissionLevel(`${keyPrefix}fic_archive`),
            },
            {
                key: `${keyPrefix}fic_taxes`,
                ...PermissionLevel(`${keyPrefix}fic_taxes`),
            },
            {
                key: `${keyPrefix}fic_stock`,
                ...PermissionLevel(`${keyPrefix}fic_stock`),
            },
            {
                key: `${keyPrefix}fic_cashbook`,
                ...PermissionLevel(`${keyPrefix}fic_cashbook`),
            },
            {
                key: `${keyPrefix}fic_settings`,
                ...PermissionLevel(`${keyPrefix}fic_settings`),
            },
            {
                key: `${keyPrefix}fic_emails`,
                ...PermissionLevel(`${keyPrefix}fic_emails`),
            },
            {
                key: `${keyPrefix}fic_export`,
                ...PermissionLevel(`${keyPrefix}fic_export`),
            },
            {
                key: `${keyPrefix}fic_import_bankstatements`,
                ...PermissionLevel(`${keyPrefix}fic_import_bankstatements`),
            },
            {
                key: `${keyPrefix}fic_import_clients_suppliers`,
                ...PermissionLevel(`${keyPrefix}fic_import_clients_suppliers`),
            },
            {
                key: `${keyPrefix}fic_import_issued_documents`,
                ...PermissionLevel(`${keyPrefix}fic_import_issued_documents`),
            },
            {
                key: `${keyPrefix}fic_import_products`,
                ...PermissionLevel(`${keyPrefix}fic_import_products`),
            },
            {
                key: `${keyPrefix}fic_recurring`,
                ...PermissionLevel(`${keyPrefix}fic_recurring`),
            },
            {
                key: `${keyPrefix}fic_riba`,
                ...PermissionLevel(`${keyPrefix}fic_riba`),
            },
            {
                key: `${keyPrefix}dic_employees`,
                ...PermissionLevel(`${keyPrefix}dic_employees`),
            },
            {
                key: `${keyPrefix}dic_settings`,
                ...PermissionLevel(`${keyPrefix}dic_settings`),
            },
            {
                key: `${keyPrefix}dic_timesheet`,
                ...PermissionLevel(`${keyPrefix}dic_timesheet`),
            },
            ...Permissions_fic_issued_documents_detailed(`${keyPrefix}fic_issued_documents_detailed`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'fic_situation': bundle.inputData?.[`${keyPrefix}fic_situation`],
            'fic_clients': bundle.inputData?.[`${keyPrefix}fic_clients`],
            'fic_suppliers': bundle.inputData?.[`${keyPrefix}fic_suppliers`],
            'fic_products': bundle.inputData?.[`${keyPrefix}fic_products`],
            'fic_issued_documents': bundle.inputData?.[`${keyPrefix}fic_issued_documents`],
            'fic_received_documents': bundle.inputData?.[`${keyPrefix}fic_received_documents`],
            'fic_receipts': bundle.inputData?.[`${keyPrefix}fic_receipts`],
            'fic_calendar': bundle.inputData?.[`${keyPrefix}fic_calendar`],
            'fic_archive': bundle.inputData?.[`${keyPrefix}fic_archive`],
            'fic_taxes': bundle.inputData?.[`${keyPrefix}fic_taxes`],
            'fic_stock': bundle.inputData?.[`${keyPrefix}fic_stock`],
            'fic_cashbook': bundle.inputData?.[`${keyPrefix}fic_cashbook`],
            'fic_settings': bundle.inputData?.[`${keyPrefix}fic_settings`],
            'fic_emails': bundle.inputData?.[`${keyPrefix}fic_emails`],
            'fic_export': bundle.inputData?.[`${keyPrefix}fic_export`],
            'fic_import_bankstatements': bundle.inputData?.[`${keyPrefix}fic_import_bankstatements`],
            'fic_import_clients_suppliers': bundle.inputData?.[`${keyPrefix}fic_import_clients_suppliers`],
            'fic_import_issued_documents': bundle.inputData?.[`${keyPrefix}fic_import_issued_documents`],
            'fic_import_products': bundle.inputData?.[`${keyPrefix}fic_import_products`],
            'fic_recurring': bundle.inputData?.[`${keyPrefix}fic_recurring`],
            'fic_riba': bundle.inputData?.[`${keyPrefix}fic_riba`],
            'dic_employees': bundle.inputData?.[`${keyPrefix}dic_employees`],
            'dic_settings': bundle.inputData?.[`${keyPrefix}dic_settings`],
            'dic_timesheet': bundle.inputData?.[`${keyPrefix}dic_timesheet`],
            'fic_issued_documents_detailed': utils.removeIfEmpty(Permissions_fic_issued_documents_detailedMapping(bundle, `${keyPrefix}fic_issued_documents_detailed`)),
        }
    },
}
