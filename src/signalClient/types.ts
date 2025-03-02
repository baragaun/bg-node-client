export interface PreKey {
  keyId: number;
  publicKey: string; // base64-encoded
}

export interface SignedPreKey extends PreKey {
  signature: string; // base64-encoded
}

export interface PrekeyBundle {
  identityKey: string; // base64-encoded
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
  id: string; // stringified ProtocolAddress, e.g. "user@device"
  publicKey: string;
}

export interface RegistrationDocument {
  id: string; // fixed, e.g. "registration"
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
