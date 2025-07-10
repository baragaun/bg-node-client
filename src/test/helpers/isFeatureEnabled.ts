import { getTestClientConfig } from './getTestClientConfig.js';

const features = new Map<string, boolean>();

const init = (): void => {
  const config = getTestClientConfig();

  features.set('channels', config.customizations?.enableChannels);
  features.set('marketplace', config.customizations?.enableMarketplace);
  features.set('nats', config.customizations?.enableNats);
};

export const isFeatureEnabled = (feature: string): boolean => {
  if (features.size < 1) {
    init();
  }

  return features.get(feature) ?? false;
};
