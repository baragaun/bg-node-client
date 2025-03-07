/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export enum DbType {
  mem = 'mem',
  rxdb = 'rxdb',
}

export enum ModelEventType {
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export enum ChannelType {
  unset = 'unset',
  test = 'test',
}

export enum ChannelMessageType {
  unset = 'unset',
  test = 'test',
}

export enum ChannelParticipantRole {
  unset = 'unset',
  test = 'test',
}
/**
 * Enum representing the type of channel event.
 */

export enum ChannelEventType {
  /**
   * A channel message was created.
   */
  messageCreated = 'messageCreated',

  /**
   * A channel message was deleted.
   */
  messageDeleted = 'messageDeleted',

  /**
   * A channel message was updated.
   * For example, the creator of the message could have changed the message text.
   */
  messageUpdated = 'messageUpdated',

  /**
   * A channel message was delivered to the recipient.
   * The channel message was saved into the database.
   */
  messageDelivered = 'messageDelivered',

  /**
   * A channel message was seen by the recipient or a participant in a group channel.
   */
  messageSeen = 'messageSeen',

  /**
   * A user started typing.
   * We will add support for this at a later time.
   */
  userStartedTyping = 'userStartedTyping',

  /**
   * A user stopped typing.
   * We will add support for this at a later time.
   */
  userStoppedTyping = 'userStoppedTyping',

  /**
   * A reaction (emoji) was added to a channel message.
   * We will add support for this at a later time.
   */
  reactionToMessageCreated = 'reactionToMessageCreated',

  /**
   * A reaction (emoji) was removed from a channel message.
   * We will add support for this at a later time.
   */
  reactionToMessageDeleted = 'reactionToMessageDeleted',
}

export enum MutationType {
  create = 'create',
  update = 'update',
  delete = 'delete',
  replace = 'replace',
}

export enum AppEnvironment {
  test = 'test',
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export enum ChannelInvitationStatus {
  created = 'created',
  accepted = 'accepted',
  declined = 'declined',
  unset = 'unset',
}

export enum UserRole {
  admin = 'admin',
  support = 'support',
  staff = 'staff',
  qa = 'qa', // person is a staff member working in QA
  test = 'test', // a test account
}

export enum AppFeature {
  testFeatures1 = 'testFeatures1',
  testFeatures2 = 'testFeatures2',
}

export enum AuthType {
  none = 'none',
  oauth = 'oauth',
  token = 'token',
  hmac = 'hmac',
  saml = 'saml',
}

export enum UiLanguage {
  ar = 'ar', // Arabic
  en = 'en', // English
  es = 'es', // Spanish
  id = 'id', // Indonesian
  ru = 'ru', // Russian
  so = 'so', // Somali
}

export enum ModelType {
  Channel = 'Channel',
  ChannelInvitation = 'ChannelInvitation',
  ChannelMessage = 'ChannelMessage',
  ChannelParticipant = 'ChannelParticipant',
  MyUser = 'MyUser',
  User = 'User',
  UserInbox = 'UserInbox',
}

export enum NotificationType {
  accountDeletedConfirmation = 'accountDeletedConfirmation',
  channelInvitationAccepted = 'channelInvitationAccepted',
  channelInvitationDeclined = 'channelInvitationDeclined',
  channelInvitationReceived = 'channelInvitationReceived',
  channelMessageReceived = 'channelMessageReceived',
  completeProfile = 'completeProfile',
  completeSignUp = 'completeSignUp',
  matchesRecommendations = 'matchesRecommendations',
  newPrivacyRules = 'newPrivacyRules',
  newsletter = 'newsletter',
  resetPasswordConfirmation = 'resetPasswordConfirmation',
  resetPasswordConfirmToken = 'resetPasswordConfirmToken',
  sendFirstInvitation = 'sendFirstInvitation',
  unset = 'unset',
  welcome = 'welcome',
}

export enum HttpHeaderName {
  authorization = 'Authorization',
  contentType = 'Content-Type',
  acceptLanguage = 'accept-language',
  adminUserId = 'x-admin-user-id',
  authType = 'x-authorization-auth-type',
  consumer = 'x-consumer',
  consumerOs = 'x-consumer-os',
  consumerVersion = 'x-consumer-version',
  deviceUuid = 'x-device',
  forwardedFor = 'x-forwarded-for',
  hmacSignature = 'x-authorization-content-sha256',
  hmacTimestamp = 'x-authorization-timestamp',
  locale = 'x-locale',
  pushNotificationToken = 'x-pn-token',
  timezone = 'x-timezone',
  userId = 'x-user-id',
}

export enum CachePolicy {
  /**
   * Ignore cache, retrieve data from network.
   */
  network = 'network',

  /**
   * Retrieve data from network, if the network is available.
   */
  networkFirst = 'network-first',

  /**
   * Retrieve data from cache only.
   */
  cache = 'cache',

  /**
   * Retrieve data from cache, if it is available there and not stale.
   */
  cacheFirst = 'cache-first',
}
