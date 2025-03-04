import { MyUser } from '../types/models/MyUser.js';
import { MutationResult } from '../types/MutationResult.js';
declare const signUpUser: (attributes: Partial<MyUser>) => Promise<MutationResult<MyUser>>;
export default signUpUser;
