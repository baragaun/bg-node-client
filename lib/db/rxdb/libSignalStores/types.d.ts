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
