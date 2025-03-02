import { RxJsonSchema } from 'rxdb';

import { SenderKeyDocument } from '../../../../signalClient/types.js';

export const senderKeySchema: RxJsonSchema<SenderKeyDocument> = {
  title: 'sender key schema',
  version: 0,
  type: 'object',
  properties: {
    // Composite key: sender.toString() + '-' + distributionId
    id: {
      type: 'string',
      maxLength: 100,
    },
    record: {
      type: 'string' // JSON-serialized sender key record.
    }
  },
  primaryKey: 'id',
  required: ['id', 'record']
};
