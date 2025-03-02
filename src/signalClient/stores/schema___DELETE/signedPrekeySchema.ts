import { RxJsonSchema } from 'rxdb';

import { SignedPreKeyDocument } from '../../types.js';

export const signedPrekeySchema: RxJsonSchema<SignedPreKeyDocument> = {
  title: 'signed prekey schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    record: {
      type: 'string' // We'll store the signed prekey record as a JSON string.
    }
  },
  primaryKey: 'id',
  required: ['id', 'record']
};
