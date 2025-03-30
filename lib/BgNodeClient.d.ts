import { ClientInfoStore } from './ClientInfoStore.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { Logger } from './types/logger.js';
export declare class BgNodeClient {
    init(config: BgNodeClientConfig, myUserId?: string, myUserDeviceUuid?: string, appLogger?: Logger): Promise<BgNodeClient>;
    addListener: (listener: import("./index.js").BgBaseListener) => void;
    operations: import("./index.js").Operations;
    removeListener: (id: string) => void;
    setConfig: (config: BgNodeClientConfig) => void;
    config: () => BgNodeClientConfig;
    clientInfoStore: ClientInfoStore;
    close: (done?: () => void) => void;
    get isInitialized(): boolean;
    get isOffline(): boolean;
    set isOffline(isOffline: boolean);
    get isSignedIn(): boolean;
    get myUserDeviceUuid(): string | undefined;
    get myUserId(): string | undefined;
}
