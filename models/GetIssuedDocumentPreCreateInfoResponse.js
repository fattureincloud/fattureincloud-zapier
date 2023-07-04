const _ = require('lodash')
const utils = require('../utils/utils');
const IssuedDocumentPreCreateInfo = require('../models/IssuedDocumentPreCreateInfo');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            ...IssuedDocumentPreCreateInfo.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'data': utils.removeIfEmpty(IssuedDocumentPreCreateInfo.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
