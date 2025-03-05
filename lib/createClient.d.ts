import { BgNodeClient } from './types/BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
declare const createClient: (config: BgNodeClientConfig) => Promise<BgNodeClient>;
export default createClient;
