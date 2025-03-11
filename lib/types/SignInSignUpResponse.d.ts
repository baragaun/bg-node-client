import { MyUser } from './models/MyUser.js';
import { UserAuthResponse } from './UserAuthResponse.js';
export interface SignInSignUpResponse {
    userAuthResponse: UserAuthResponse;
    myUser?: MyUser;
}
