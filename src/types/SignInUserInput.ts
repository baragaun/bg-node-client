import { AuthType, CookieChoiceTextId, UserIdentType } from '../enums.js';

export type SignInUserInput = {
  allowToTrack?: boolean;
  authType?: AuthType;
  cookieConsentChoice?: CookieChoiceTextId;
  ident?: string;
  identType?: UserIdentType;
  password?: string;
  pushNotificationToken?: string;
};
