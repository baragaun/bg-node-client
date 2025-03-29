import { QueryResult } from '../../../types/QueryResult.js';
import { SignInUserInput as SignInUserInputFromClient } from '../../../types/SignInUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
declare const SignInUser: (input: SignInUserInputFromClient) => Promise<QueryResult<UserAuthResponse>>;
export default SignInUser;
