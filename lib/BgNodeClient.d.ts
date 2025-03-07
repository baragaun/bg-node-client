import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
export declare class BgNodeClient {
    init(config: BgNodeClientConfig): Promise<BgNodeClient>;
    addListener: (listener: import("./types/BgDataListener.js").BgDataListener) => void;
    operations: import("./types/Operations.js").Operations;
    removeListener: (id: string) => void;
}
