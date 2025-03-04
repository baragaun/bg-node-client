import { Graffle } from 'graffle';
import type { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';

let _config: BgNodeClientConfig;

export const setConfig = (config: BgNodeClientConfig): void => {
  _config = config;
};

export const createGraffleClient = (): any => {
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
