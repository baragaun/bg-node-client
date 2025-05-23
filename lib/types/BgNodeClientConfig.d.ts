import { ClientInfoStore } from '../ClientInfoStore.js';
import { AppEnvironment, ClientInfoStoreType } from '../enums.js';
import { HttpHeaders } from './HttpHeaders.js';
import { NatsOptions } from './NatsOptions.js';
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
    enableMockMode?: boolean;
    /**
     * The name of the database that RxDB will use.
     */
    dbName?: string;
    /**
     * Manages the storage of the user ID, the authentication token, and the device UUID.
     * The `type` property specifies the type of storage to use:
     * * `localStorage` - Uses the browser's localStorage (use it for better visibility when troubleshooting)
     * * `db` - the database used by RxDB
     * * `delegated` - Uses a delegate's `persist` and `load` methods that are supplied to BgNodeClient
     * The unit tests use `delegated` when they test using multiple client instances. In this case
     * they just save the client info in memory.
     */
    clientInfoStoreType?: ClientInfoStoreType;
    /**
     * A reference to a clientInfo store, if BgNodeClient should not use one of its built-in.
     */
    clientInfoStore?: ClientInfoStore;
    /** Integration with the GraphQL API */
    fsdata?: {
        /** The URL of the GraphQL API */
        url: string;
        /** The URL of the GraphQL for testing */
        testUrl?: string;
        /**
         * Optional headers to be included with every request
         */
        headers?: HttpHeaders;
    };
    logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'silent';
    /**
     * Set to true if the client is running in a browser.
     */
    inBrowser: boolean;
    /**
     * The email domain used for testing.
     */
    testEmailDomain?: string;
    /**
     * The prefix for email addresses used for testing.
     */
    testEmailPrefix?: string;
    /**
     * NATS configuration
     * Here is a sample config:
     *   {
     *     servers: ['nats://localhost:4222'],
     *     timeout: 5000,
     *     reconnectTimeWait: 1000,
     *   }
     */
    nats?: NatsOptions;
    /**
     * Can a channel have more than 2 participants?
     */
    enableGroupChannels: boolean;
}
