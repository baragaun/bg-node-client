import SignalClient from '@signalapp/libsignal-client';
const createRegistration = (registrationId = 5) => {
    // Generate a new private key
    const privateKey = SignalClient.PrivateKey.generate();
    // Serialize the private key to a base64 string
    const privateKeyString = privateKey.serialize().toString('base64');
    // Create a registration document
    const regDoc = {
        id: 'registration',
        registrationId,
        privateKey: privateKeyString,
    };
    return regDoc;
};
export default createRegistration;
//# sourceMappingURL=createRegistration.js.map