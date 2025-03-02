import { RxJsonSchema } from 'rxdb';
import { KyberPreKeyDocument } from '../../../../signalClient/types.js';

export const kyberPrekeySchema: RxJsonSchema<KyberPreKeyDocument> = {
  title: 'kyber prekey schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    record: {
      type: 'string' // The KyberPreKeyRecord serialized as a JSON string.
    },
    used: {
      type: 'boolean' // Flag to indicate whether this prekey has been used.
    }
  },
  primaryKey: 'id',
  required: ['id', 'record', 'used']
};
