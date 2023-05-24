const _ = require('lodash')
const utils = require('../utils/utils');
const User = require('./User').fields;
const UserMapping = require('./User').mapping;
const GetUserInfoResponse_info = require('./GetUserInfoResponse_info').fields;
const GetUserInfoResponse_infoMapping = require('./GetUserInfoResponse_info').mapping;
const GetUserInfoResponse_email_confirmation_state = require('./GetUserInfoResponse_email_confirmation_state').fields;
const GetUserInfoResponse_email_confirmation_stateMapping = require('./GetUserInfoResponse_email_confirmation_state').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...User(keyPrefix + 'data'),
            ...GetUserInfoResponse_info(keyPrefix + 'info'),
            ...GetUserInfoResponse_email_confirmation_state(keyPrefix + 'email_confirmation_state'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(UserMapping(bundle, keyPrefix + 'data')),
            'info': utils.removeIfEmpty(GetUserInfoResponse_infoMapping(bundle, keyPrefix + 'info')),
            'email_confirmation_state': utils.removeIfEmpty(GetUserInfoResponse_email_confirmation_stateMapping(bundle, keyPrefix + 'email_confirmation_state')),
        }
    },
}
