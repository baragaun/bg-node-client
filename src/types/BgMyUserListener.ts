import { BgBaseListener } from './BgBaseListener.js';
import { MyUser } from '../models/MyUser.js';

/**
 * Interface representing a listener for auth events.
 */
export interface BgMyUserListener extends BgBaseListener {
  onSignedOut?: () => void;
  onSignedIn?: () => void;
  onMyUserUpdated?: (myUser: MyUser) => void;
}
