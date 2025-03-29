import { BgNodeClient } from '../../BgNodeClient.js';
declare const clientStore: {
    getTestClient: (createNew?: boolean) => Promise<BgNodeClient>;
};
export default clientStore;
