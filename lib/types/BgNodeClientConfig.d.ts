import { AppEnvironment, ClientInfoStoreType } from '../enums.js';
import { HttpHeaders } from './HttpHeaders.js';
import { ClientInfo } from './models/ClientInfo.js';
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
    clientInfoStore?: {
        type: ClientInfoStoreType;
        delegate?: {
            persist?: (info: ClientInfo) => Promise<ClientInfo>;
            load?: () => Promise<ClientInfo | null>;
        };
    };
    fsdata?: {
        url: string;
        testUrl?: string;
        /**
         * Optional headers to be included with every request
         */
        headers?: HttpHeaders;
    };
    libSignal?: {
        enable: boolean;
        registrationId: number;
    };
    logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'silent';
    inBrowser: boolean;
    testEmailDomain?: string;
    testEmailPrefix?: string;
}
