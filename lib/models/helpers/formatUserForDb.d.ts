import { User } from '../../types/models/User.js';
declare const formatUserForDb: (obj: Partial<User>) => Partial<User>;
export default formatUserForDb;
