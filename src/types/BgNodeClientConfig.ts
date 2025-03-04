import { DbType } from './enums.js';

/**
 * Configuration for BgNodeClient.
 */
export interface BgNodeClientConfig {
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

  /**
   * API configuration
   */
  api: {
    /**
     * The base URL for the API
     */
    url: string;
    /**
     * Optional headers to be included with every request
     */
    headers?: {
      'Content-Type'?: string;
      'x-authorization-auth-type'?: string;
      'x-device'?: string;
      [key: string]: string | undefined;
    };
  };

  libSignal?: {
    enable: boolean;
    registrationId: number;
  }

  inBrowser: boolean;
}
