import { SignInUserInput, UserAuthResponse } from '../../gql/graphql.js';
declare const SignInUser: (input: SignInUserInput) => Promise<UserAuthResponse>;
export default SignInUser;
