import { DbType } from './enums.js';

/**
 * Configuration for BgChannelsWebClient.
 */
export interface BgChannelsWebClientConfig {
  /**
   * If true, the client will use mock data instead of real data.
   */
  useMockData?: boolean;

  /**
   * The type of store to be used: Either mem or rxdb.
   */
  dbType?: DbType;

  /**
   * If true, it enables dev mode features.
   */
  debugMode?: boolean;
}
