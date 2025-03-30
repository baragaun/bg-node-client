import { ClientInfoStoreType } from './enums.js';
import { ClientInfo } from './models/ClientInfo.js';
export declare class ClientInfoStore {
    private _storeType;
    private _clientInfo;
    constructor(storeType: ClientInfoStoreType, clientInfo?: ClientInfo);
    close: () => void;
    get clientInfo(): ClientInfo;
    get isSignedIn(): boolean;
    get myUserId(): string;
    get myUserDeviceUuid(): string;
    get isSessionActive(): boolean;
    static createDeviceUuid(): string;
    save(changes?: Partial<ClientInfo>): Promise<ClientInfo>;
    load(): Promise<ClientInfo>;
    clear(): Promise<ClientInfo>;
    clearMyUserFromClientInfo(signedOutUserId?: string): Promise<ClientInfo>;
    updateMyUserUpdatedAt: (myUserUpdatedAt: number) => void;
    sessionEnded: () => void;
    sessionStarted: () => void;
}
