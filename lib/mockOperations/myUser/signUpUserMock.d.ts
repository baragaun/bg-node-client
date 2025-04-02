import { QueryResult } from '../../types/QueryResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';
declare const signUpUserMock: (input: SignUpUserInput) => Promise<QueryResult<SignInSignUpResponse>>;
export default signUpUserMock;
