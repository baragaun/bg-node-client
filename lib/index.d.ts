import { BgNodeClient } from './BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
export declare const init: (myUserId: string | null | undefined, config: BgNodeClientConfig) => Promise<BgNodeClient>;
