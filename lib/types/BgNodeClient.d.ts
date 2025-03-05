import { BgDataListener } from './BgDataListener.js';
import { BgNodeClientConfig } from './BgNodeClientConfig.js';
import { Operations } from './Operations.js';
export interface BgNodeClient {
    addListener: (listener: BgDataListener) => void;
    init: (config: BgNodeClientConfig) => Promise<void>;
    operations: Operations;
    removeListener: (id: string) => void;
}
