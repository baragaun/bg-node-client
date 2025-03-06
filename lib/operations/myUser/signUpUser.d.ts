import { MutationResult } from '../../types/MutationResult.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
import { SignUpInput } from '../../types/SignUpInput.js';
declare const signUpUser: (input: SignUpInput) => Promise<MutationResult<SignInSignUpResponse>>;
export default signUpUser;
