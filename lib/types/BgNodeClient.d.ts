import { BgNodeClientConfig } from './BgNodeClientConfig.js';
export declare class BgNodeClient {
    init(config: BgNodeClientConfig): Promise<BgNodeClient>;
    addListener: (listener: import("./BgDataListener.js").BgDataListener) => void;
    operations: import("./Operations.js").Operations;
    removeListener: (id: string) => void;
}
