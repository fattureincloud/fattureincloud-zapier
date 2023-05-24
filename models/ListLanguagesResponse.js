const _ = require('lodash')
const utils = require('../utils/utils');
const Language = require('./Language').fields;
const LanguageMapping = require('./Language').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = ''
        let labelPrefix = ''
        if(prefix) {
            keyPrefix = prefix + '.'
        }
        labelPrefix = keyPrefix.replaceAll('.', ' ')
        return [
            {
                key: keyPrefix + 'data',
                
                children: Language(keyPrefix + 'data'), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[keyPrefix + 'data']),
        }
    },
}
