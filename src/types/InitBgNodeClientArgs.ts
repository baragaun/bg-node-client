import { BgBaseListener } from './BgBaseListener.js';
import { BgNodeClientConfig } from './BgNodeClientConfig.js';
import { Logger } from './logger.js';

/**
 * Configuration for BgNodeClient.
 */
export interface InitBgNodeClientArgs {
  config: BgNodeClientConfig;
  myUserId?: string;
  myUserDeviceUuid?: string;
  isOnline?: boolean;
  startSession?: boolean;
  appLogger?: Logger;
  listener?: BgBaseListener;
}
