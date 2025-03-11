import { SignUpUserInput } from '../../../types/SignUpUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
declare const signUpUser: (input: SignUpUserInput) => Promise<UserAuthResponse>;
export default signUpUser;
