import { MyUser } from '../types/models/MyUser.js';
import { MutationType } from '../types/enums.js';
import db from '../db/db.js';
const signUpUser = async (attributes) => {
    try {
        const myUser = new MyUser(attributes);
        return db.insert(myUser);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map