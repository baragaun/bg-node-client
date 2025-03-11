import { MutationResult } from '../../types/MutationResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';
declare const signUpUser: (input: SignUpUserInput) => Promise<MutationResult<SignInSignUpResponse>>;
export default signUpUser;
