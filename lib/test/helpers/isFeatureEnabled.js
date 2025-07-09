import { getTestClientConfig } from './getTestClientConfig.js';
const features = new Map();
const init = () => {
    const config = getTestClientConfig();
    features.set('channels', config.enableChannels);
    features.set('marketplace', config.enableMarketplace);
    features.set('nats', config.enableNats);
};
export const isFeatureEnabled = (feature) => {
    if (features.size < 1) {
        init();
    }
    return features.get(feature) ?? false;
};
//# sourceMappingURL=isFeatureEnabled.js.map