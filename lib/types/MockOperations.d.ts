import { MockFactories } from './MockFactories.js';
import { QueryResult } from './QueryResult.js';
import { SignInSignUpResponse } from './SignInSignUpResponse.js';
import { SignUpUserInput } from './SignUpUserInput.js';
import { UserIdentType as UserIdentTypeFromClient } from '../enums.js';
import { MyUser } from '../models/MyUser.js';
export interface MockOperations {
    factories: MockFactories;
    myUser: {
        blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined) => Promise<QueryResult<MyUser>>;
        findAvailableUserHandle: (startValue: string) => Promise<QueryResult<string>>;
        isUserIdentAvailable: (userIdent: string, _identType: UserIdentTypeFromClient) => Promise<QueryResult<boolean>>;
        signMeOut: () => Promise<QueryResult<void>>;
        signUpUser: (input: SignUpUserInput) => Promise<QueryResult<SignInSignUpResponse>>;
        unblockUserForMe: (userId: string) => Promise<QueryResult<MyUser>>;
        verifyMyPassword: (password: string) => Promise<QueryResult<boolean>>;
    };
}
