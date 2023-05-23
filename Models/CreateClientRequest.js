const _ = require('lodash')
const utils = require('../utils/utils');
const Client = require('./Client').fields;
const ClientMapping = require('./Client').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            ...Client(keyPrefix + 'data'),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(ClientMapping(bundle, keyPrefix + 'data')),
        }
    },
}