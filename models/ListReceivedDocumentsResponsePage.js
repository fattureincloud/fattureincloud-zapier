const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocument = require('./ReceivedDocument').fields;
const ReceivedDocumentMapping = require('./ReceivedDocument').mapping;

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}data`,
                label: `${labelPrefix}data]`,
                children: ReceivedDocument(`${keyPrefix}data${!isInput && '[]'}`), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeKeyPrefixes(bundle.inputData?.[`${keyPrefix}data`]),
        }
    },
}
