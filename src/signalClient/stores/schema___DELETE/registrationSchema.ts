import { RxJsonSchema } from 'rxdb';
import { RegistrationDocument } from '../../types.js';

export const registrationSchema: RxJsonSchema<RegistrationDocument> = {
  title: 'registration id schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    registrationId: {
      type: 'number'
    },
    privateKey: {
      type: 'string' // base64 encoded private identity key
    }
  },
  primaryKey: 'id',
  required: ['id', 'registrationId', 'privateKey']
};
