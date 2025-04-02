import { QueryResult } from '../../../types/QueryResult.js';
import { SignUpUserInput as SignUpUserInputFromClient } from '../../../types/SignUpUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
declare const signUpUser: (input: SignUpUserInputFromClient) => Promise<QueryResult<UserAuthResponse>>;
export default signUpUser;
