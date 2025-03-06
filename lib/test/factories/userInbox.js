import { Factory } from 'rosie';
import randomDate from '../../helpers/randomDate.js';
import { ModelType } from '../../types/enums.js';
import { UserInbox } from '../../types/models/UserInbox.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
const userInboxFactory = Factory.define('UserInbox', UserInbox).attr('createdAt', () => randomDate());
userInboxFactory.create = (props, options, count) => create(props, ModelType.UserInbox, options, count);
userInboxFactory.save = async (userInbox) => save(userInbox);
userInboxFactory.delete = async (userInbox) => {
    await deleteFunc(userInbox.id, ModelType.UserInbox);
    return userInbox;
};
export default userInboxFactory;
//# sourceMappingURL=userInbox.js.map