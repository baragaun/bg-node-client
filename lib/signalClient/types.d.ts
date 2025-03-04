export interface PreKey {
    keyId: number;
    publicKey: string;
}
export interface SignedPreKey extends PreKey {
    signature: string;
}
export interface PrekeyBundle {
    identityKey: string;
    registrationId: number;
    preKey: PreKey;
    signedPreKey: SignedPreKey;
    userId: string;
}
export interface ChannelMessage {
    text: string;
    createBy: string;
    buffer?: Buffer<ArrayBuffer>;
}
export interface ChatInvite {
    from: string;
    to: string;
}
export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}
export interface IdentityKeyDocument {
    id: string;
    publicKey: string;
}
export interface RegistrationDocument {
    id: string;
    registrationId: number;
    privateKey: string;
}
export interface KyberPreKeyDocument {
    id: string;
    record: string;
    used: boolean;
}
export interface PreKeyDocument {
    id: string;
    record: string;
}
export interface SenderKeyDocument {
    id: string;
    record: string;
}
export interface SessionDocument {
    address: string;
    record: string;
}
export interface SignedPreKeyDocument {
    id: string;
    record: string;
}
