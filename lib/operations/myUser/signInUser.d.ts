import { QueryResult } from '../../types/QueryResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
declare const signInUser: (input: SignInInput) => Promise<QueryResult<SignInSignUpResponse>>;
export default signInUser;
