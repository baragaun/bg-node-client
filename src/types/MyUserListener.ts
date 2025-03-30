import { BgBaseListener } from './BgBaseListener.js';
import { MyUser } from '../models/MyUser.js';

/**
 * Interface representing a listener for auth events.
 */
export interface MyUserListener extends BgBaseListener {
  onSignedOut?: () => void | Promise<void>;
  onSignedIn?: () => void | Promise<void>;
  onMyUserUpdated?: (myUser: MyUser) => void | Promise<void>;
}
