import { ClientInfo } from './models/ClientInfo.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { Logger } from './types/logger.js';
export declare class BgNodeClient {
    init(config: BgNodeClientConfig, myUserId?: string, myUserDeviceUuid?: string, appLogger?: Logger): Promise<BgNodeClient>;
    addListener: (listener: import("./index.js").BgDataListener) => void;
    operations: import("./index.js").Operations;
    removeListener: (id: string) => void;
    setConfig: (config: BgNodeClientConfig) => void;
    config: () => BgNodeClientConfig;
    clientInfoStore: {
        clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
        close: () => void;
        get: () => ClientInfo;
        load: () => Promise<ClientInfo>;
        persist: (newClientInfo?: Partial<ClientInfo>) => Promise<ClientInfo>;
        updateMyUserUpdatedAt: (myUserUpdatedAt: number) => void;
        sessionEnded: () => void;
        sessionStarted: () => void;
    };
    close: (done?: () => void) => void;
    get isInitialized(): boolean;
    get isSignedIn(): string | undefined;
    get myUserDeviceUuid(): string | undefined;
    get myUserId(): string | undefined;
}
