import { BgChannelInboxSchema } from './bgChannelInboxSchema.js';
import { BgChannelInvitationSchema } from './bgChannelInvitationSchema.js';
import { BgChannelMessageSchema } from './bgChannelMessageSchema.js';
import { BgChannelParticipantSchema } from './bgChannelParticipantSchema.js';
import { BgChannelSchema } from './bgChannelSchema.js';
import { SidUserSchema } from './sidUserSchema.js';
const schema = {
    Channel: BgChannelSchema,
    UserInbox: BgChannelInboxSchema,
    ChannelInvitation: BgChannelInvitationSchema,
    ChannelMessage: BgChannelMessageSchema,
    ChannelParticipant: BgChannelParticipantSchema,
    User: SidUserSchema,
    MyUser: SidUserSchema,
};
export default schema;
//# sourceMappingURL=schema.js.map