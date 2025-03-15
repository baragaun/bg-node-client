import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
export declare class BgNodeClient {
    init(config: BgNodeClientConfig, myUserId?: string, myUserDeviceUuid?: string): Promise<BgNodeClient>;
    addListener: (listener: import("./types/BgDataListener.js").BgDataListener) => void;
    operations: import("./types/Operations.js").Operations;
    removeListener: (id: string) => void;
    setConfig: (config: BgNodeClientConfig) => void;
    config: () => BgNodeClientConfig;
    clientInfoStore: {
        clearMyUserFromClientInfo: (signedOutUserId?: string) => Promise<import("./types/index.js").ClientInfo>;
        load: () => Promise<import("./types/index.js").ClientInfo>;
        save: (newClientInfo: Partial<import("./types/index.js").ClientInfo>) => Promise<import("./types/index.js").ClientInfo>;
        get: () => import("./types/index.js").ClientInfo | undefined;
    };
    get myUserId(): string | undefined;
    get myUserDeviceUuid(): string | undefined;
}
