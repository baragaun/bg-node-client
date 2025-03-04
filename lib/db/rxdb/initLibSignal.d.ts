import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { MyUser } from '../../types/models/MyUser.js';
declare const initLibSignal: (myUser: MyUser | null | undefined, config: BgNodeClientConfig) => Promise<void>;
export default initLibSignal;
