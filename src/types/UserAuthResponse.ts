import { AuthType, UserRole } from '../enums.js';

export type UserAuthResponse = {
  authToken?: string;
  authTokenExpiresAt?: string;
  authType: AuthType;
  email: string;
  firstName: string;
  foundUser: boolean;
  lastName: string;
  onboardingStage: string;
  phoneNumber: string;
  roles: Array<UserRole>;
  userHandle: string;
  userId: string;
};
