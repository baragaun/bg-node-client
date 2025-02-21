import { BgChannelsWebClient } from './BgChannelsWebClient.js';
import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';

export function init(config: BgChannelsWebClientConfig) {
  return new BgChannelsWebClient(config);
}
