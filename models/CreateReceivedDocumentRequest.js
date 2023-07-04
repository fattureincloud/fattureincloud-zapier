const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocument = require('../models/ReceivedDocument');

module.exports = {
    fields: (prefix = '', isInput = true) => {
        let keyPrefix = prefix && `${prefix}${isInput ? '.' : '__'}`
        let labelPrefix = keyPrefix && keyPrefix.replaceAll('__', '.')
        return [
            {
                key: `${keyPrefix}pending_id`,
                label: `Pending received document id of the document from which the new document is created. - [${labelPrefix}pending_id]`,
                type: 'integer',
            },
            ...ReceivedDocument.fields(`${keyPrefix}data`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'pending_id': bundle.inputData?.[`${keyPrefix}pending_id`],
            'data': utils.removeIfEmpty(ReceivedDocument.mapping(bundle, `${keyPrefix}data`)),
        }
    },
}
