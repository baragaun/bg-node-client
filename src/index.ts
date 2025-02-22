import { BgChannelsWebClient } from './BgChannelsWebClient.js';
import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';

export function init(config: BgChannelsWebClientConfig): BgChannelsWebClient {
  return new BgChannelsWebClient(config);
}
