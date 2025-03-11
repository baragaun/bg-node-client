import { UserIdentType as UserIdentTypeFromClient } from '../../../enums.js';
declare const isUserIdentAvailable: (userIdent: string, identType: UserIdentTypeFromClient) => Promise<boolean>;
export default isUserIdentAvailable;
