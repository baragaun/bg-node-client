import { AppEnvironment } from '../enums.js';
import { HttpHeaders } from './HttpHeaders.js';
/**
 * Configuration for BgNodeClient.
 */
export interface BgNodeClientConfig {
    /**
     * Defaults to `production`
     */
    appEnvironment?: AppEnvironment;
    /**
     * If true, the client will use mock data instead of real data.
     */
    useMockData?: boolean;
    dbName?: string;
    fsdata?: {
        url: string;
        /**
         * Optional headers to be included with every request
         */
        headers?: HttpHeaders;
    };
    libSignal?: {
        enable: boolean;
        registrationId: number;
    };
    inBrowser: boolean;
}
