import { RxJsonSchema } from 'rxdb';
import { PreKeyDocument } from '../../../../signalClient/types.js';

export const preKeySchema: RxJsonSchema<PreKeyDocument> = {
  title: 'prekey schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    record: {
      type: 'string', // We'll store the prekey record as a JSON string.
    },
  },
  primaryKey: 'id',
  required: ['id', 'record'],
};
