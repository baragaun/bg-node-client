import { AuthType, CookieChoiceTextId, UserIdentType } from '../enums.js';
export interface SignInInput {
    allowToTrack?: boolean;
    authType?: AuthType;
    cookieConsentChoice?: CookieChoiceTextId;
    ident?: string;
    identType?: UserIdentType;
    password?: string;
    pushNotificationToken?: string;
}
