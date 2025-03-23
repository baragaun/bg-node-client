import { UserAuthResponse } from './UserAuthResponse.js';
import { MyUser } from '../models/MyUser.js';

export interface SignInSignUpResponse {
  userAuthResponse: UserAuthResponse;
  myUser?: MyUser;
}
