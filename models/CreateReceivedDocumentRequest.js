const _ = require('lodash')
const utils = require('../utils/utils');
const ReceivedDocument = require('./ReceivedDocument').fields;
const ReceivedDocumentMapping = require('./ReceivedDocument').mapping;

module.exports = {
    fields: (prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return [
            {
                key: `${keyPrefix}pending_id`,
                label: `Pending received document id of the document from which the new document is created. - [${keyPrefix}pending_id]`,
                type: 'integer',
            },
            ...ReceivedDocument(`${keyPrefix}data`),
        ]
    },
    mapping: (bundle, prefix = '') => {
        let keyPrefix = prefix && `${prefix}.`
        return {
            'pending_id': bundle.inputData?.[`${keyPrefix}pending_id`],
            'data': utils.removeIfEmpty(ReceivedDocumentMapping(bundle, `${keyPrefix}data`)),
        }
    },
}
