import { Graffle } from 'graffle';
let _config;
export const setConfig = (config) => {
    _config = config;
};
export const createGraffleClient = () => {
    if (!_config) {
        throw new Error('Graffle client config not set. Call setConfig first.');
    }
    const client = Graffle
        .create()
        .transport({
        url: _config.api.url,
        headers: {
            'Content-Type': 'application/json',
            ..._config.api.headers
        }
    });
    console.log('Creating Graffle client with config:', {
        url: _config.api.url,
        headers: _config.api.headers
    });
    return client;
};
//# sourceMappingURL=createGraffleClient.js.map