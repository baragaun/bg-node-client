import { getTestClientConfig } from './getTestClientConfig.js';
const features = new Map();
const init = () => {
    const config = getTestClientConfig();
    features.set('channels', config.customizations?.enableChannels);
    features.set('marketplace', config.customizations?.enableMarketplace);
    features.set('nats', config.customizations?.enableNats);
};
export const isFeatureEnabled = (feature) => {
    if (features.size < 1) {
        init();
    }
    return features.get(feature) ?? false;
};
//# sourceMappingURL=isFeatureEnabled.js.map