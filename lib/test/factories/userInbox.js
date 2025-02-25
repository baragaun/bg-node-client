import FactoryGirl from 'factory-girl';
import { UserInbox } from '../../types/models/UserInbox.js';
import chance from '../helpers/chance.js';
const createdAt = new Date(Date.now() - 36000000); // 10 hours ago
const attrs = {
    createdAt: () => createdAt,
    updatedAt: () => createdAt,
    userId: chance.guid(),
};
const initUserInboxFactory = () => {
    FactoryGirl.factory.define('UserInbox', UserInbox, attrs);
};
export default initUserInboxFactory;
//# sourceMappingURL=userInbox.js.map