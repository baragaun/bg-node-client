import { BgNodeClient } from '../../BgNodeClient.js';
declare const clientStore: {
    getTestClient: (createNew?: boolean, enableMockMode?: boolean) => Promise<BgNodeClient>;
    getTestClientSync: () => BgNodeClient;
};
export default clientStore;
