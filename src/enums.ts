/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export enum AppFeature {
  testFeatures1 = 'testFeatures1',
  testFeatures2 = 'testFeatures2',
}

export enum AppEnvironment {
  test = 'test',
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export enum AssetHostingService {
  s3 = 's3',
  unset = 'unset'
}

export enum AuthType {
  none = 'none',
  oauth = 'oauth',
  token = 'token',
  hmac = 'hmac',
  saml = 'saml',
}

// see: https://www.plascards.com/help-center/barcodes.php
export enum BarcodeType {
  TYPE_39 = 'TYPE_39',
  TYPE_128 = 'TYPE_128',
  CODE_25 = 'CODE_25',
  ITF = 'ITF', // Interleaved 2 OF 5
  I125 = 'I125',
  UPC_A = 'UPC_A',
  UPC_E = 'UPC_E',
  EAN_13 = 'EAN_13',
  EAN_8 = 'EAN_8',
  QR_CODE = 'QR_CODE',
  PDF417 = 'PDF417',
  DATA_MATRIX = 'DATA_MATRIX',
}

export enum BgListenerTopic {
  channel = 'channel',
  myUser = 'myUser',
}

export enum BgNodeClientUiErrorCode {
  invalidInput = 'invalidInput',
  notFound = 'notFound',
  unauthorized = 'unauthorized',
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

export enum ChannelInvitationStatus {
  created = 'created',
  accepted = 'accepted',
  declined = 'declined',
  unset = 'unset',
}

export enum ChannelType {
  unset = 'unset',
  mentoring = 'mentoring',
  support = 'support',
  welcome = 'welcome',
}

export enum ChannelInvitationDirection {
  received = 'received',
  sent = 'sent'
}

export enum ChannelMessageType {
  unset = 'unset',
  invitation = 'invitation',
  support = 'support',
  system = 'system',
  // welcome message type (specific type of support channel)
  welcome = 'welcome',
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

export enum ClientInfoStoreType {
  localStorage = 'localStorage',
  db = 'db',
  inMemory = 'inMemory',
}

export enum DeclineChannelInvitationReasonTextId {
  fakeProfile = 'fakeProfile',
  inappropriate = 'inappropriate',
  noReason = 'noReason',
  notGoodFit = 'notGoodFit',
  tooBusy = 'tooBusy'
}

export enum CookieChoiceTextId {
  acceptAll = 'acceptAll',
  acceptEssentials = 'acceptEssentials',
  rejectAll = 'rejectAll',
}

export enum GroupMembershipRole {
  admin = 'admin',
  coordinator = 'coordinator',
  moderator = 'moderator',
  owner = 'owner',
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

export enum IncludeFilterOption {
  include = 'include',
  exclude = 'exclude',
  only = 'only',
}

export enum ModelEventType {
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export enum ModelType {
  Brand = 'Brand',
  Channel = 'Channel',
  ChannelInvitation = 'ChannelInvitation',
  ChannelMessage = 'ChannelMessage',
  ChannelParticipant = 'ChannelParticipant',
  ClientInfo = 'ClientInfo',
  GiftCardProduct = 'GiftCardProduct',
  MyUser = 'MyUser',
  Product = 'Product',
  PurchaseOrder = 'PurchaseOrder',
  PurchaseOrderItem = 'PurchaseOrderItem',
  ServiceRequest = 'ServiceRequest',
  ShoppingCart = 'ShoppingCart',
  ShoppingCartItem = 'ShoppingCartItem',
  SidMultiStepAction = 'SidMultiStepAction',
  SidMultiStepActionProgress = 'SidMultiStepActionProgress',
  unset = 'unset',
  User = 'User',
  UserInbox = 'UserInbox',
  Wallet = 'Wallet',
  WalletItem = 'WalletItem',
}

export enum MutationType {
  create = 'create',
  update = 'update',
  delete = 'delete',
  replace = 'replace',
}

export enum MultiStepActionType {
  resetPassword = 'resetPassword',
  tokenSignIn = 'tokenSignIn',
  unset = 'unset',
  updateEmail = 'updateEmail',
  updatePassword = 'updatePassword',
  updatePhoneNumber = 'updatePhoneNumber',
  verifyEmail = 'verifyEmail',
  verifyPhoneNumber = 'verifyPhoneNumber',
  verifyPhoneSignupOnSignup = 'verifyPhoneSignupOnSignup',
}

export enum MultiStepActionEventType {
  /** The multi-step action failed.
   * Check `SidMultiStepActionProgress.result` for the reason. */
  failed = 'failed',

  /** The notification (i.e. email) has been sent successfully. */
  notificationSent = 'notificationSent',

  /** The notification (i.e. email) has failed to send. */
  notificationFailed = 'notificationFailed',

  /** The multi-step process has likely ended with an exception.
   * Check `SidMultiStepActionProgress.result` for the reason. */
  other = 'other',

  /** The user supplied password was in correct. */
  passwordMismatch = 'passwordMismatch',

  /** The token has successfully been verified and the process finished. */
  success = 'success',

  /** The action has timed out. */
  timedOut = 'timedOut',

  /** The user has entered an incorrect confirmation token. */
  tokenFailed = 'tokenFailed',
}

export enum MultiStepActionStatus {
  created = 'created',
  finished = 'finished',
  started = 'started',
}

export enum MultiStepActionSendNotificationResult {
  failed = 'failed',
  ok = 'ok',
  phoneNumberInvalid = 'phoneNumberInvalid',
}

export enum MultiStepActionResult {
  confirmTokenMismatch = 'confirmTokenMismatch',
  dataValidationFailed = 'dataValidationFailed',
  deviceNotFound = 'deviceNotFound',
  emailMismatch = 'emailMismatch',
  emailNotVerified = 'emailNotVerified',
  error = 'error',
  expired = 'expired',
  invalidEmail = 'invalidEmail',
  missingEmail = 'missingEmail',
  missingPhoneNumber = 'missingPhoneNumber',
  notFound = 'notFound',
  ok = 'ok',
  passed = 'passed',
  passwordMismatch = 'passwordMismatch',
  passwordUpdated = 'passwordUpdated',
  phoneNumberInvalid = 'phoneNumberInvalid',
  phoneNumberMismatch = 'phoneNumberMismatch',
  phoneNumberNotVerified = 'phoneNumberNotVerified',
  systemError = 'systemError',
  unset = 'unset',
  userFailedValidation = 'userFailedValidation',
  userNotFound = 'userNotFound',
  userNotSignedIn = 'userNotSignedIn',
}

export enum NotificationMethod {
  auto = 'auto',
  email = 'email',
  inAppNotification = 'inAppNotification',
  off = 'off',
  pushNotification = 'pushNotification',
  sms = 'sms',
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

export enum ReportUserReasonTextId {
  badActor = 'badActor',
  fakePerson = 'fakePerson',
  harasses = 'harasses',
  impersonator = 'impersonator',
  inappropriate = 'inappropriate',
  notSet = 'notSet',
  objectionableLanguage = 'objectionableLanguage',
  promotesHate = 'promotesHate',
  sharesObjectionableContent = 'sharesObjectionableContent',
  spammer = 'spammer',
  usesObjectionableLanguage = 'usesObjectionableLanguage',
  violatesRules = 'violatesRules'
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum ServiceRequestResult {
  error = 'error',
  ok = 'ok',
  unset = 'unset'
}

export enum UiLanguage {
  ar = 'ar', // Arabic
  de = 'de', // German
  en = 'en', // English
  es = 'es', // Spanish
  id = 'id', // Indonesian
  ru = 'ru', // Russian
  so = 'so', // Somali
}

export enum UserRole {
  admin = 'admin',
  support = 'support',
  staff = 'staff',
  qa = 'qa', // person is a staff member working in QA
  test = 'test', // a test account
}

// export enum UiMessageType {
//   appErrorCode = 'appErrorCode',
//   bgNodeClientUiErrorCode = 'bgNodeClientUiErrorCode',
//   multiStepActionResult = 'multiStepActionResult',
//   serverErrorCode = 'serverErrorCode',
// }

export enum UserIdentType {
  any = 'any',
  email = 'email',
  id = 'id',
  inviteCode = 'inviteCode',
  oauthProfileUrl = 'oauthProfileUrl',
  oauthUserId = 'oauthUserId',
  phoneNumber = 'phoneNumber',
  userHandle = 'userHandle',
}

export enum UploadedAssetType {
  avatar = 'avatar',
  profileHeroImage = 'profileHeroImage',
  unset = 'unset'
}

export enum WalletItemSource {
  user = 'user',
  purchased = 'purchased',
  gifted = 'gifted',
}

