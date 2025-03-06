import { MutationResult } from '../../types/MutationResult.js';
import { SignInInput } from '../../types/SignInInput.js';
import { SignInSignUpResponse } from '../../types/SignInSignUpResponse.js';
declare const signInUser: (input: SignInInput) => Promise<MutationResult<SignInSignUpResponse>>;
export default signInUser;
