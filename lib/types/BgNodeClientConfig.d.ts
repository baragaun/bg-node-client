import { DbType } from './enums.js';
import { HttpHeaders } from './HttpHeaders.js';
/**
 * Configuration for BgNodeClient.
 */
export interface BgNodeClientConfig {
    myUserId?: string;
    myUserDeviceUuid?: string;
    authToken?: string;
    /**
     * If true, the client will use mock data instead of real data.
     */
    useMockData?: boolean;
    /**
     * The type of store to be used: Either mem or rxdb.
     */
    dbType?: DbType;
    dbName?: string;
    /**
     * If true, it enables dev mode features.
     */
    debugMode?: boolean;
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
