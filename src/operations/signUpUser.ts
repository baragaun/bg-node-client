import { MyUser } from '../types/models/MyUser.js';
import { MutationResult } from '../types/MutationResult.js';
import { MutationType } from '../types/enums.js';
import db from '../db/db.js';

const signUpUser = async (
  attributes: Partial<MyUser>,
): Promise<MutationResult<MyUser>> => {
  try {
    const myUser = new MyUser(attributes);

    return db.insert<MyUser>(myUser);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
}

export default signUpUser
