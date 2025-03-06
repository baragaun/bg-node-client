import SignalClient from '@signalapp/libsignal-client';
import { RegistrationDocument } from '../types.js';

const createRegistration = (registrationId = 5): RegistrationDocument => {
  // Generate a new private key
  const privateKey = SignalClient.PrivateKey.generate();
  // Serialize the private key to a base64 string
  const privateKeyString = privateKey.serialize().toString('base64');

  // Create a registration document
  const regDoc: RegistrationDocument = {
    id: 'registration',
    registrationId,
    privateKey: privateKeyString,
  };

  return regDoc;
};

export default createRegistration;
