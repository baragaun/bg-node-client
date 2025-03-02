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
