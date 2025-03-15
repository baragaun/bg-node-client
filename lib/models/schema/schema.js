import { ChannelInvitationSchema } from './channelInvitationSchema.js';
import { ChannelMessageSchema } from './channelMessageSchema.js';
import { ChannelParticipantSchema } from './channelParticipantSchema.js';
import { ChannelSchema } from './channelSchema.js';
import { ClientInfoSchema } from './clientInfoSchema.js';
import { ContactSchema } from './contactSchema.js';
import { MyUserSchema } from './myUserSchema.js';
import { UserInboxSchema } from './userInboxSchema.js';
const schema = {
    Channel: ChannelSchema,
    ChannelInvitation: ChannelInvitationSchema,
    ChannelMessage: ChannelMessageSchema,
    ChannelParticipant: ChannelParticipantSchema,
    ClientInfo: ClientInfoSchema,
    Contact: ContactSchema,
    MyUser: MyUserSchema,
    User: MyUserSchema,
    UserInbox: UserInboxSchema,
};
export default schema;
//# sourceMappingURL=schema.js.map