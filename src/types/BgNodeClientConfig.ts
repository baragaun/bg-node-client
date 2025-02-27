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

  /**
   * If true, it enables dev mode features.
   */
  debugMode?: boolean;

  inBrowser: boolean;
}
