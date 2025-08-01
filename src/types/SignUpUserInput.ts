import { AuthType, CookieChoiceTextId } from '../enums.js';

export type SignUpUserInput = {
  adminNotes?: string;
  allowToTrack?: boolean;
  authType?: AuthType;
  avatarUrl?: string;
  checkAvailable?: boolean;
  cookieConsentChoice?: CookieChoiceTextId;
  createdAt?: string;
  createdBy?: string;
  deletedAt?: string;
  deletedBy?: string;
  email?: string;
  emailSource?: string;
  emailVerifiedAt?: string;
  // events?: ModelEventInput[];
  firstName?: string;
  id?: string;
  isTestUser?: boolean;
  lastName?: string;
  // metadata?: InputMaybe<BaseModelMetadataInput>;
  offersHelp?: boolean;
  optIntoNewsletter?: boolean;
  password?: string;
  phoneNumber?: string;
  pushNotificationToken?: string;
  seeksHelp?: boolean;
  source?: string;
  timezone?: string;
  trackId?: string;
  updatedAt?: string;
  updatedBy?: string;
  userHandle?: string;
  captchaService?: string;
  captchaToken?: string;
  passwordHash?: string;
  passwordUpdatedAt?: string;
};
