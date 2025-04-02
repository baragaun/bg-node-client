import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { SignUpUserInput as SignUpUserInputFromClient } from '../../../types/SignUpUserInput.js';
import { UserAuthResponse } from '../../../types/UserAuthResponse.js';
import { MutationSignUpUserArgs, SignUpUserInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = {
  data: {
    signUpUser: UserAuthResponse;
  };
  errors?: { message: string }[];
};

const signUpUser = async (
  input: SignUpUserInputFromClient,
): Promise<QueryResult<UserAuthResponse>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.signUpUser: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    input.checkAvailable = true;
    const args: MutationSignUpUserArgs = {
      input: input as unknown as SignUpUserInput,
    };

    const response: ResponseDataType = await client.mutation.signUpUser({
      $: args,
      userId: true,
      authToken: true,
    });

    logger.debug('fsdata.signUpUser response:', { response });

    return { object: response.data.signUpUser };
  } catch (error) {
    logger.error('fsdata.signUpUser mutation error:', { input, error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default signUpUser;
