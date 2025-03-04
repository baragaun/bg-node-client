import SignalClient from '@signalapp/libsignal-client';
export declare function fromBase64ToPrivateKey(base64Str: string): SignalClient.PrivateKey;
export declare function fromPublicKeyToBase64(key: SignalClient.PublicKey): string;
export declare function fromBase64ToPublicKey(base64Str: string): SignalClient.PublicKey;
