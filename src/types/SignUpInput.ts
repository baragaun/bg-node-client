import { AuthType, CookieChoiceTextId } from '../fsdata/gql/graphql.js';

export interface SignUpInput {
  allowToTrack?: boolean;
  authType?: AuthType;
  avatarUrl?: string;
  cookieConsentChoice?: CookieChoiceTextId;
  email?: string;
  emailSource?: string;
  firstName?: string;
  lastName?: string;
  optIntoNewsletter?: boolean;
  password?: string;
  phoneNumber?: string;
  pushNotificationToken?: string;
  source?: string;
  timezone?: string;
  trackId?: string;
  userHandle?: string;
  isTestUser?: boolean;
}
