function publicKeyToBase64(key) {
    // This function should convert your PublicKey object to a Buffer,
    // then to a base64 string. How you do this depends on your key type.
    // For example, if key.toBytes() returns a Buffer/Uint8Array:
    return Buffer.from(key.serialize()).toString('base64');
}
function kemPublicKeyToBase64(key) {
    // Similarly for KEMPublicKey.
    return Buffer.from(key.serialize()).toString('base64');
}
export function preKeyBundleToJSON(bundle) {
    return JSON.stringify({
        registrationId: bundle.registrationId(),
        deviceId: bundle.deviceId(),
        preKeyId: bundle.preKeyId(), // may be null
        preKeyPublic: bundle.preKeyPublic() ? publicKeyToBase64(bundle.preKeyPublic()) : null,
        signedPreKeyId: bundle.signedPreKeyId(),
        signedPreKeyPublic: publicKeyToBase64(bundle.signedPreKeyPublic()),
        signedPreKeySignature: bundle.signedPreKeySignature().toString('base64'),
        identityKey: publicKeyToBase64(bundle.identityKey()),
        kyberPreKeyId: bundle.kyberPreKeyId(), // may be null
        kyberPreKeyPublic: bundle.kyberPreKeyPublic() ? kemPublicKeyToBase64(bundle.kyberPreKeyPublic()) : null,
        kyberPreKeySignature: bundle.kyberPreKeySignature() ? bundle.kyberPreKeySignature().toString('base64') : null,
    });
}
//# sourceMappingURL=preKeyBundleToJSON.js.map