import type { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import type { HttpHeaders } from '../../types/HttpHeaders.js';
declare const helpers: {
    config: () => BgNodeClientConfig;
    headers: () => HttpHeaders;
    init: (config: BgNodeClientConfig) => void;
};
export default helpers;
