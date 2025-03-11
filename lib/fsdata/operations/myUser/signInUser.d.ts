import { SignInUserInput as SignInUserInputFromClient } from '../../../types/SignInUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
declare const SignInUser: (input: SignInUserInputFromClient) => Promise<UserAuthResponse>;
export default SignInUser;
