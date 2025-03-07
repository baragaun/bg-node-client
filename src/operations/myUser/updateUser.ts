import { MutationType } from '../../enums.js';
import { UserInput } from '../../fsdata/gql/graphql.js';
import updateUserMutation from '../../fsdata/mutations/updateUser.js';
import { MutationResult } from '../../types/MutationResult.js';

const updateUser = async (input: UserInput): Promise<MutationResult> => {
  try {
    await updateUserMutation(input);

    return {
      operation: MutationType.update,
    };
  } catch (error) {
    console.error(error);
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateUser;
