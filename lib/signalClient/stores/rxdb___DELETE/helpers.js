export function fromBase64ToPrivateKey(base64Str) {
    // Implementation depends on your libsignal type definitions.
    // For example, you might parse a JSON representation or use a library function.
    return JSON.parse(atob(base64Str));
}
export function fromPublicKeyToBase64(key) {
    // Convert the public key to a base64 string. Implementation depends on key structure.
    return btoa(JSON.stringify(key));
}
export function fromBase64ToPublicKey(base64Str) {
    return JSON.parse(atob(base64Str));
}
//# sourceMappingURL=helpers.js.map