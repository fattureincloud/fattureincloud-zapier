const _ = require('lodash')
const utils = require('../utils/utils');
const GetUserInfoResponse_email_confirmation_state = require('../models/GetUserInfoResponse_email_confirmation_state');
const GetUserInfoResponse_info = require('../models/GetUserInfoResponse_info');
const User = require('../models/User');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...User.fields(`${keyPrefix}data`, isInput),
            ...GetUserInfoResponse_info.fields(`${keyPrefix}info`, isInput),
            ...GetUserInfoResponse_email_confirmation_state.fields(`${keyPrefix}email_confirmation_state`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(User.mapping(bundle, `${keyPrefix}data`)),
            'info': utils.removeIfEmpty(GetUserInfoResponse_info.mapping(bundle, `${keyPrefix}info`)),
            'email_confirmation_state': utils.removeIfEmpty(GetUserInfoResponse_email_confirmation_state.mapping(bundle, `${keyPrefix}email_confirmation_state`)),
        }
    },
}
