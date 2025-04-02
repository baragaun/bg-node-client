import { MockFactories } from './MockFactories.js';
import { QueryResult } from './QueryResult.js';
import { SignInSignUpResponse } from './SignInSignUpResponse.js';
import { SignUpUserInput } from './SignUpUserInput.js';
import { UserIdentType as UserIdentTypeFromClient } from '../enums.js';
export interface MockOperations {
    factories: MockFactories;
    myUser: {
        findAvailableUserHandle: (startValue: string) => Promise<QueryResult<string>>;
        isUserIdentAvailable: (userIdent: string, _identType: UserIdentTypeFromClient) => Promise<QueryResult<boolean>>;
        signMeOut: () => Promise<QueryResult<void>>;
        signUpUser: (input: SignUpUserInput) => Promise<QueryResult<SignInSignUpResponse>>;
        verifyMyPassword: (password: string) => Promise<QueryResult<boolean>>;
    };
}
