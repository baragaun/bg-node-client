import { ClientInfoStore } from './ClientInfoStore.js';
import { InitBgNodeClientArgs } from './types/InitBgNodeClientArgs.js';
export declare class BgNodeClient {
    init(args: InitBgNodeClientArgs): Promise<BgNodeClient>;
    addListener: (listener: import("./index.js").BgBaseListener) => void;
    mockOperations: import("./types/MockOperations.js").MockOperations;
    operations: import("./index.js").Operations;
    removeListener: (id: string) => void;
    setConfig: (config: import("./index.js").BgNodeClientConfig) => void;
    config: () => import("./index.js").BgNodeClientConfig;
    clientInfoStore: ClientInfoStore;
    close: (done?: () => void) => void;
    get isInitialized(): boolean;
    get isOnline(): boolean;
    set isOnline(isOnline: boolean);
    get isInMockMode(): boolean;
    set enableMockMode(enable: boolean);
    get isSignedIn(): boolean;
    get myUserDeviceUuid(): string | undefined;
    get myUserId(): string | undefined;
}
