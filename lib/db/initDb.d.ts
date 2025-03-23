import { MyUser } from "../models/MyUser.js";
import { BgNodeClientConfig } from "../types/BgNodeClientConfig.js";
declare const initDb: (config: BgNodeClientConfig) => Promise<MyUser | null>;
export default initDb;
