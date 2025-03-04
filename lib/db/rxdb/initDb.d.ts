import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { MyUser } from '../../types/models/MyUser.js';
declare const initDb: (userId: string | null | undefined, config: BgNodeClientConfig) => Promise<MyUser | null>;
export default initDb;
