import { ChannelInvitationSchema } from './channelInvitationSchema.js';
import { ChannelMessageSchema } from './channelMessageSchema.js';
import { ChannelParticipantSchema } from './channelParticipantSchema.js';
import { ChannelSchema } from './channelSchema.js';
import { ClientInfoSchema } from './clientInfoSchema.js';
import { ContactSchema } from './contactSchema.js';
import { MyUserSchema } from './myUserSchema.js';
import { PurchaseOrderItemSchema } from './purchaseOrderItemSchema.js';
import { PurchaseOrderSchema } from './purchaseOrderSchema.js';
import { ShoppingCartItemSchema } from './shoppingCartItemSchema.js';
import { ShoppingCartSchema } from './shoppingCartSchema.js';
import { UserInboxSchema } from './userInboxSchema.js';
import { WalletItemSchema } from './walletItemSchema.js';
import { WalletSchema } from './walletSchema.js';

const schema = {
  Channel: ChannelSchema,
  ChannelInvitation: ChannelInvitationSchema,
  ChannelMessage: ChannelMessageSchema,
  ChannelParticipant: ChannelParticipantSchema,
  ClientInfo: ClientInfoSchema,
  Contact: ContactSchema,
  MyUser: MyUserSchema,
  purchaseOrder: PurchaseOrderSchema,
  purchaseOrderItem: PurchaseOrderItemSchema,
  shoppingCart: ShoppingCartSchema,
  shoppingCartItem: ShoppingCartItemSchema,
  User: MyUserSchema,
  UserInbox: UserInboxSchema,
  Wallet: WalletSchema,
  WalletItem: WalletItemSchema,
};

export default schema;
