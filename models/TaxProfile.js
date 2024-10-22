const utils = require('../utils/utils');
const VatType = require('../models/VatType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}company_type`,
                label: `The company type - [${labelPrefix}company_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}company_subtype`,
                label: `The company subtype - [${labelPrefix}company_subtype]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}profession`,
                label: `The profession - [${labelPrefix}profession]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}regime`,
                label: `The applied regime - [${labelPrefix}regime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rivalsa_name`,
                label: `The name of the rivalsa - [${labelPrefix}rivalsa_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}default_rivalsa`,
                label: `The default rivalsa amount - [${labelPrefix}default_rivalsa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa_name`,
                label: `The name of the cassa - [${labelPrefix}cassa_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}default_cassa`,
                label: `The default cassa amount - [${labelPrefix}default_cassa]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}default_cassa_taxable`,
                label: `The default taxable amount for the cassa - [${labelPrefix}default_cassa_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cassa2_name`,
                label: `The name of the second cassa - [${labelPrefix}cassa2_name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}default_cassa2`,
                label: `The default second cassa amount - [${labelPrefix}default_cassa2]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}default_cassa2_taxable`,
                label: `The default taxable amount for the second cassa - [${labelPrefix}default_cassa2_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}default_withholding_tax`,
                label: `The default withholding tax - [${labelPrefix}default_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}default_withholding_tax_taxable`,
                label: `The default taxable amount for the withholding tax - [${labelPrefix}default_withholding_tax_taxable]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}default_other_withholding_tax`,
                label: `The default other withholding tax - [${labelPrefix}default_other_withholding_tax]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}enasarco`,
                label: `If it has enasarco - [${labelPrefix}enasarco]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enasarco_type`,
                label: `The enasarco type - [${labelPrefix}enasarco_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contributions_percentage`,
                label: `The contributions percentage - [${labelPrefix}contributions_percentage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}profit_coefficient`,
                label: `The profit coefficient - [${labelPrefix}profit_coefficient]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}med`,
                label: `If the health card system is active - [${labelPrefix}med]`,
                type: 'boolean',
            },
            ...VatType.fields(`${keyPrefix}default_vat`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'company_type': bundle.inputData?.[`${keyPrefix}company_type`],
            'company_subtype': bundle.inputData?.[`${keyPrefix}company_subtype`],
            'profession': bundle.inputData?.[`${keyPrefix}profession`],
            'regime': bundle.inputData?.[`${keyPrefix}regime`],
            'rivalsa_name': bundle.inputData?.[`${keyPrefix}rivalsa_name`],
            'default_rivalsa': bundle.inputData?.[`${keyPrefix}default_rivalsa`],
            'cassa_name': bundle.inputData?.[`${keyPrefix}cassa_name`],
            'default_cassa': bundle.inputData?.[`${keyPrefix}default_cassa`],
            'default_cassa_taxable': bundle.inputData?.[`${keyPrefix}default_cassa_taxable`],
            'cassa2_name': bundle.inputData?.[`${keyPrefix}cassa2_name`],
            'default_cassa2': bundle.inputData?.[`${keyPrefix}default_cassa2`],
            'default_cassa2_taxable': bundle.inputData?.[`${keyPrefix}default_cassa2_taxable`],
            'default_withholding_tax': bundle.inputData?.[`${keyPrefix}default_withholding_tax`],
            'default_withholding_tax_taxable': bundle.inputData?.[`${keyPrefix}default_withholding_tax_taxable`],
            'default_other_withholding_tax': bundle.inputData?.[`${keyPrefix}default_other_withholding_tax`],
            'enasarco': bundle.inputData?.[`${keyPrefix}enasarco`],
            'enasarco_type': bundle.inputData?.[`${keyPrefix}enasarco_type`],
            'contributions_percentage': bundle.inputData?.[`${keyPrefix}contributions_percentage`],
            'profit_coefficient': bundle.inputData?.[`${keyPrefix}profit_coefficient`],
            'med': bundle.inputData?.[`${keyPrefix}med`],
            'default_vat': utils.removeIfEmpty(VatType.mapping(bundle, `${keyPrefix}default_vat`)),
        }
    },
}
