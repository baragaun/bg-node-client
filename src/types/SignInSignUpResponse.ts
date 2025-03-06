import { UserAuthResponse } from '../fsdata/gql/graphql.js';
import { MyUser } from './models/MyUser.js';

export interface SignInSignUpResponse {
  userAuthResponse: UserAuthResponse;
  myUser?: MyUser;
}
