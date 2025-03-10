import { MyUser } from './models/MyUser.js';
import { UserAuthResponse } from '../fsdata/gql/graphql.js';
export interface SignInSignUpResponse {
    userAuthResponse: UserAuthResponse;
    myUser?: MyUser;
}
