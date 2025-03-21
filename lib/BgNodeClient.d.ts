import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { Logger } from './types/logger.js';
import { ClientInfo } from './types/models/ClientInfo.js';
export declare class BgNodeClient {
    init(config: BgNodeClientConfig, myUserId?: string, myUserDeviceUuid?: string, appLogger?: Logger): Promise<BgNodeClient>;
    addListener: (listener: import("./types/BgDataListener.js").BgDataListener) => void;
    operations: import("./types/Operations.js").Operations;
    removeListener: (id: string) => void;
    setConfig: (config: BgNodeClientConfig) => void;
    config: () => BgNodeClientConfig;
    clientInfoStore: {
        clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<ClientInfo>;
        close: () => void;
        load: () => Promise<ClientInfo>;
        persist: (newClientInfo?: Partial<ClientInfo>) => Promise<ClientInfo>;
        get: () => ClientInfo;
    };
    close: (done?: () => void) => void;
    get myUserId(): string | undefined;
    get isSignedIn(): string | undefined;
    get myUserDeviceUuid(): string | undefined;
}
