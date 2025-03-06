import signMeOutMutation from '../../fsdata/mutations/signMeOut.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MutationResult } from '../../types/MutationResult.js';
import { MutationType } from '../../types/enums.js';

const signMeOut = async (): Promise<MutationResult> => {
  try {
    await signMeOutMutation();

    const config = data.config();
    config.myUserId = null;
    config.authToken = null;
    data.setConfig(config);

    // Save the data to LocalStorage:
    saveUserInfo(
      undefined,
      undefined,
      null, // erasing the authToken
    );

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

export default signMeOut;
