import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../enums.js';
import { Channel } from '../../models/Channel.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { MyUser } from '../../models/MyUser.js';
import { User } from '../../models/User.js';
import clientStore from '../helpers/clientStore.js';
import { createChannelSpecHelper } from '../helpers/createChannel.specHelper.js';
import { createChannelInvitationSpecHelper } from '../helpers/createChannelInvitation.specHelper.js';
import { createMultipleUsersSpecHelper } from '../helpers/createMultipleUsers.specHelper.js';
import { deleteMultipleUsersSpecHelper } from '../helpers/deleteMultipleUsers.specHelper.js';
import { getTestUserPropsSpecHelper } from '../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../helpers/signMeIn.specHelper.js';

describe('operations.findById', () => {
  let users: MyUser[];
  let client: BgNodeClient;
  let passwords: string[];

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    users = await createMultipleUsersSpecHelper(3, client);
    passwords = users.map(u => getTestUserPropsSpecHelper(u).password || '');

    await signMeInSpecHelper(users[0].email as string, passwords[0] as string, client);
  });

  afterAll(async () => {
    await deleteMultipleUsersSpecHelper(users, client);
  });

  describe('with a MyUser object', () => {
    test('should find my user on the network', async () => {
      const response = await client.operations.findById<MyUser>(
        client.myUserId,
        ModelType.MyUser,
        { cachePolicy: CachePolicy.network },
      );
      const myUser = response.object;

      expect(response.error).toBeUndefined();
      expect(response.object).toBeDefined();
      expect(myUser.id).toBe(client.myUserId);
      expect(myUser.userHandle).toBe(users[0].userHandle);
      expect(myUser.email).toBe(users[0].email);
    });

    test('should find my user in the local cache', async () => {
      const response = await client.operations.findById<MyUser>(
        client.myUserId,
        ModelType.MyUser,
        { cachePolicy: CachePolicy.cache },
      );
      const myUser = response.object;

      expect(response.error).toBeUndefined();
      expect(response.object).toBeDefined();
      expect(myUser.id).toBe(client.myUserId);
      expect(myUser.userHandle).toBe(users[0].userHandle);
      expect(myUser.email).toBe(users[0].email);
    });
  });

  describe('with a Channel object', () => {
    let channel: Channel;

    beforeAll(async () => {
      channel = await createChannelSpecHelper({ createdBy: users[0].id! }, 0, client );
    });

    test('should find the channel on the network', async () => {
      const response = await client.operations.findById<Channel>(
        channel.id,
        ModelType.Channel,
        { cachePolicy: CachePolicy.network },
      );
      const reloadedChannel = response.object;

      expect(response.error).toBeUndefined();
      expect(response.object).toBeDefined();
      expect(reloadedChannel.id).toBe(channel.id);
      expect(reloadedChannel.name).toBe(channel.name);
      expect(reloadedChannel.createdAt).toBe(channel.createdAt);
    });

    test('should find the channel in the local cache', async () => {
      const response = await client.operations.findById<Channel>(
        channel.id,
        ModelType.Channel,
        { cachePolicy: CachePolicy.cache },
      );
      const reloadedChannel = response.object;

      expect(response.error).toBeUndefined();
      expect(response.object).toBeDefined();
      expect(reloadedChannel.id).toBe(channel.id);
      expect(reloadedChannel.name).toBe(channel.name);
      expect(reloadedChannel.createdAt).toBe(channel.createdAt);
    });
  });

  describe('with a ChannelInvitation object', () => {
    let channelInvitation: ChannelInvitation;
    let sender: User;
    let recipient: User;

    beforeAll(async () => {
      sender = users[0];
      recipient = users[1];
      channelInvitation = await createChannelInvitationSpecHelper(
        {
          createdBy: sender.id!,
          recipientId: recipient.id!,
        },
        client,
      );
    });

    test('should find the channelInvitation on the network', async () => {
      const response = await client.operations.findById<ChannelInvitation>(
        channelInvitation.id,
        ModelType.ChannelInvitation,
        { cachePolicy: CachePolicy.network },
      );
      const reloadedChannelInvitation = response.object;

      expect(response.error).toBeUndefined();
      expect(response.object).toBeDefined();
      expect(reloadedChannelInvitation.id).toBe(channelInvitation.id);
      expect(reloadedChannelInvitation.recipientId).toBe(channelInvitation.recipientId);
      expect(reloadedChannelInvitation.messageText).toBe(channelInvitation.messageText);
      expect(reloadedChannelInvitation.createdAt).toBe(channelInvitation.createdAt);
      expect(reloadedChannelInvitation.createdBy).toBe(channelInvitation.createdBy);
    });

    test('should find the channelInvitation in the local cache', async () => {
      const response = await client.operations.findById<ChannelInvitation>(
        channelInvitation.id,
        ModelType.ChannelInvitation,
        { cachePolicy: CachePolicy.cache },
      );
      const reloadedChannelInvitation = response.object;

      expect(response.error).toBeUndefined();
      expect(response.object).toBeDefined();
      expect(reloadedChannelInvitation.id).toBe(channelInvitation.id);
      expect(reloadedChannelInvitation.recipientId).toBe(channelInvitation.recipientId);
      expect(reloadedChannelInvitation.messageText).toBe(channelInvitation.messageText);
      expect(reloadedChannelInvitation.createdAt).toBe(channelInvitation.createdAt);
      expect(reloadedChannelInvitation.createdBy).toBe(channelInvitation.createdBy);
    });
  });
}, 100000);
