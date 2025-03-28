import { AuthType } from '../enums.js';
export type UserAuthResponse = {
    authToken?: string;
    authTokenExpiresAt?: string;
    authType: AuthType;
    firstName: string;
    foundUser: boolean;
    lastName: string;
    onboardingStage: string;
    userId: string;
};
