import { BgNodeClient } from '../../BgNodeClient.js';
declare const clientStore: {
    getTestClient: (createNew?: boolean, enableMockMode?: boolean) => Promise<BgNodeClient>;
};
export default clientStore;
