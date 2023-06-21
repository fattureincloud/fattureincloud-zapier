const _ = require('lodash')
const utils = require('../utils/utils');
const User = require('./User').fields;
const UserMapping = require('./User').mapping;
const GetUserInfoResponse_info = require('./GetUserInfoResponse_info').fields;
const GetUserInfoResponse_infoMapping = require('./GetUserInfoResponse_info').mapping;
const GetUserInfoResponse_email_confirmation_state = require('./GetUserInfoResponse_email_confirmation_state').fields;
const GetUserInfoResponse_email_confirmation_stateMapping = require('./GetUserInfoResponse_email_confirmation_state').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...User(`${keyPrefix}data`, isInput),
            ...GetUserInfoResponse_info(`${keyPrefix}info`, isInput),
            ...GetUserInfoResponse_email_confirmation_state(`${keyPrefix}email_confirmation_state`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(UserMapping(bundle, `${keyPrefix}data`)),
            'info': utils.removeIfEmpty(GetUserInfoResponse_infoMapping(bundle, `${keyPrefix}info`)),
            'email_confirmation_state': utils.removeIfEmpty(GetUserInfoResponse_email_confirmation_stateMapping(bundle, `${keyPrefix}email_confirmation_state`)),
        }
    },
}
