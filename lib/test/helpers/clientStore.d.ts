import { BgNodeClient } from '../../BgNodeClient.js';
declare const clientStore: {
    clearClientInfo: () => void;
    getTestClient: (createNew?: boolean) => Promise<BgNodeClient>;
};
export default clientStore;
