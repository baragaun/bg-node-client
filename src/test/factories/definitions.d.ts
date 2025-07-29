import rosie from 'rosie';

import { Channel } from '../../models/Channel.ts';
import { ChannelInvitation } from '../../models/ChannelInvitation.ts';
import { ChannelMessage } from '../../models/ChannelMessage.ts';
import { ChannelParticipant } from '../../models/ChannelParticipant.ts';
import { User } from '../../models/User.js';
import { UserInbox } from '../../models/UserInbox.ts';

export interface ChannelFactory extends rosie.IFactory<Channel> {
  create: (
    props: Partial<Channel | Channel[]>,
    options?: any,
    count?: number,
  ) => Promise<Channel | Channel[]>;
  save: (channel: Channel) => Promise<Channel>;
  delete: (channel: Channel) => Promise<Channel>;
}

export interface ChannelInvitationFactory
  extends rosie.IFactory<ChannelInvitation> {
  create: (
    props: Partial<ChannelInvitation | ChannelInvitation[]>,
    options?: any,
    count?: number,
  ) => Promise<ChannelInvitation | ChannelInvitation[]>;
  save: (channelInvitation: ChannelInvitation) => Promise<ChannelInvitation>;
  delete: (channelInvitation: ChannelInvitation) => Promise<ChannelInvitation>;
}

export interface ChannelMessageFactory extends rosie.IFactory<ChannelMessage> {
  create: (
    props: Partial<ChannelMessage | ChannelMessage[]>,
    options?: any,
    count?: number,
  ) => Promise<ChannelMessage | ChannelMessage[]>;
  save: (channelMessage: ChannelMessage) => Promise<ChannelMessage>;
  delete: (channelMessage: ChannelMessage) => Promise<ChannelMessage>;
}

export interface ChannelParticipantFactory
  extends rosie.IFactory<ChannelParticipant> {
  create: (
    props: Partial<ChannelParticipant | ChannelParticipant[]>,
    options?: any,
    count?: number,
  ) => Promise<ChannelParticipant | ChannelParticipant[]>;
  save: (channelParticipant: ChannelParticipant) => Promise<ChannelParticipant>;
  delete: (
    channelParticipant: ChannelParticipant,
  ) => Promise<ChannelParticipant>;
}

export interface UserFactory extends rosie.IFactory<User> {
  create: (
    props: Partial<User | User[]>,
    options?: any,
    count?: number,
  ) => Promise<User | User[]>;
  save: (user: User) => Promise<User>;
  delete: (user: User) => Promise<User>;
}

export interface UserInboxFactory extends rosie.IFactory<UserInbox> {
  create: (
    props: Partial<UserInbox | UserInbox[]>,
    options?: any,
    count?: number,
  ) => Promise<UserInbox | UserInbox[]>;
  save: (userInbox: UserInbox) => Promise<UserInbox>;
  delete: (userInbox: UserInbox) => Promise<UserInbox>;
}

export interface WalletFactory extends rosie.IFactory<Wallet> {
  create: (
    props: Partial<Wallet | Wallet[]>,
    options?: any,
    count?: number,
  ) => Promise<Wallet | Wallet[]>;
  save: (wallet: Wallet) => Promise<Wallet>;
  delete: (wallet: Wallet) => Promise<Wallet>;
}

export interface WalletItemTransferFactory extends rosie.IFactory<WalletItemTransfer> {
  create: (
    props: Partial<WalletItemTransfer | WalletItemTransfer[]>,
    options?: any,
    count?: number,
  ) => Promise<WalletItemTransfer | WalletItemTransfer[]>;
  save: (walletItemTransfer: WalletItemTransfer) => Promise<WalletItemTransfer>;
  delete: (walletItemTransfer: WalletItemTransfer) => Promise<Wallet>;
}

export type ModelFactory =
  | ChannelFactory
  | ChannelInvitationFactory
  | ChannelMessageFactory
  | ChannelParticipantFactory
  | UserFactory
  | UserInboxFactory
  | WalletFactory
  | WalletItemTransferFactory;
