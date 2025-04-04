import { QueryResult } from '../../types/QueryResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
declare const signInUserMock: (input: SignInInput) => Promise<QueryResult<SignInSignUpResponse>>;
export default signInUserMock;
