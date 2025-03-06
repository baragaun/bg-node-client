import { BgDataListener } from './BgDataListener.js';
import { BgNodeClientConfig } from './BgNodeClientConfig.js';
import { Operations } from './Operations.js';
export interface BgNodeClient {
    init: (config: BgNodeClientConfig) => Promise<void>;
    addListener: (listener: BgDataListener) => void;
    operations: Operations;
    removeListener: (id: string) => void;
}
