import { BgNodeClient } from '../../BgNodeClient.js';
declare const getTestClient: (createNew?: boolean) => Promise<BgNodeClient>;
export default getTestClient;
