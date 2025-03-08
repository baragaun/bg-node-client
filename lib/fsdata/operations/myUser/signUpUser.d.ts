import { SignUpUserInput, UserAuthResponse } from '../../gql/graphql.js';
declare const signUpUser: (input: SignUpUserInput) => Promise<UserAuthResponse>;
export default signUpUser;
