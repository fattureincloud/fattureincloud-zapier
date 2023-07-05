const utils = require('../utils/utils');
const ListUserCompaniesResponse_data = require('../models/ListUserCompaniesResponse_data');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ListUserCompaniesResponse_data.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': utils.removeIfEmpty(ListUserCompaniesResponse_data.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
