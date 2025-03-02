import { KEMPublicKey, PreKeyBundle, PublicKey } from '@signalapp/libsignal-client';
// Helper: convert a base64 string to a Buffer.
function base64ToBuffer(base64Str) {
    return Buffer.from(base64Str, 'base64');
}
// Helper: convert a base64 string into a PublicKey.
// (You must implement this based on how your PublicKey is constructed.)
function publicKeyFromBase64(base64Str) {
    // For example, if your PublicKey can be instantiated from a Buffer:
    const buf = base64ToBuffer(base64Str);
    // Assume a function like PublicKey.fromBytes exists.
    return PublicKey.deserialize(buf);
}
// Helper: convert a base64 string into a KEMPublicKey.
// (Implement this based on your KEMPublicKey type.)
function kemPublicKeyFromBase64(base64Str) {
    const buf = base64ToBuffer(base64Str);
    // Assume a function like KEMPublicKey.fromBytes exists.
    return KEMPublicKey.deserialize(buf);
}
// Main function to convert a JSON string into a PreKeyBundle.
export function jsonToPreKeyBundle(json) {
    const obj = JSON.parse(json);
    const registrationId = obj.registrationId;
    const deviceId = obj.deviceId;
    const preKeyId = obj.preKeyId;
    const preKeyPublic = obj.preKeyPublic ? publicKeyFromBase64(obj.preKeyPublic) : null;
    const signedPreKeyId = obj.signedPreKeyId;
    const signedPreKeyPublic = publicKeyFromBase64(obj.signedPreKeyPublic);
    const signedPreKeySignature = base64ToBuffer(obj.signedPreKeySignature);
    const identityKey = publicKeyFromBase64(obj.identityKey);
    const kyberPreKeyId = obj.kyberPreKeyId;
    const kyberPreKey = obj.kyberPreKeyPublic ? kemPublicKeyFromBase64(obj.kyberPreKeyPublic) : null;
    const kyberPreKeySignature = obj.kyberPreKeySignature ? base64ToBuffer(obj.kyberPreKeySignature) : null;
    return PreKeyBundle.new(registrationId, deviceId, preKeyId, preKeyPublic, signedPreKeyId, signedPreKeyPublic, signedPreKeySignature, identityKey, kyberPreKeyId, kyberPreKey, kyberPreKeySignature);
}
//# sourceMappingURL=jsonToPreKeyBundle.js.map