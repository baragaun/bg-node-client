import {
  MultiStepActionResult, MultiStepActionSendNotificationResult,
  MultiStepActionStatus,
  MultiStepActionType,
  NotificationMethod,
} from '../enums.js';
import { MultiStepActionError } from '../types/MultiStepActionError.js';

export class GroupsUserMetadata {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public userIdent?: string | null;
  public userHandle?: string | null;
  public email?: string | null;
  public phoneNumber?: string | null;
  public deviceUuid?: string | null;
  public actionType: MultiStepActionType = MultiStepActionType.unset;
  public actionStatus: MultiStepActionStatus = MultiStepActionStatus.created;
  public notificationMethod: NotificationMethod = NotificationMethod.auto;
  public result: MultiStepActionResult = MultiStepActionResult.unset;
  public confirmToken?: string | null;
  public attemptCount = 0;
  public notificationSentAt?: string | null;
  public notificationResult?: MultiStepActionSendNotificationResult | null;
  public notificationId?: string | null;
  public textData?: string | null;
  public report?: string | null;
  public emailPassed?: boolean | null;
  public emailUpdatedAt?: string | null;
  public emailVerifiedAt?: string | null;
  public errors?: MultiStepActionError[] | null;
  public password?: string | null;
  public passwordPassed?: boolean | null;
  public passwordResettedAt?: string | null;
  public passwordUpdatedAt?: string | null;
  public phoneNumberPassed?: boolean | null;
  public phoneNumberUpdatedAt?: string | null;
  public phoneNumberVerifiedAt?: string | null;
  public signedInAt?: string | null;
  public tfaBackupCodes?: string | null;
  public expiresAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<GroupsUserMetadata>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId !== undefined) {
        this.userId = attributes.userId;
      }
      if (attributes.userIdent !== undefined) {
        this.userIdent = attributes.userIdent;
      }
      if (attributes.userHandle !== undefined) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.email !== undefined) {
        this.email = attributes.email;
      }
      if (attributes.phoneNumber !== undefined) {
        this.phoneNumber = attributes.phoneNumber;
      }
      if (attributes.deviceUuid !== undefined) {
        this.deviceUuid = attributes.deviceUuid;
      }
      if (attributes.actionType !== undefined) {
        this.actionType = attributes.actionType;
      }
      if (attributes.actionStatus !== undefined) {
        this.actionStatus = attributes.actionStatus;
      }
      if (attributes.notificationMethod !== undefined) {
        this.notificationMethod = attributes.notificationMethod;
      }
      if (attributes.result !== undefined) {
        this.result = attributes.result;
      }
      if (attributes.confirmToken !== undefined) {
        this.confirmToken = attributes.confirmToken;
      }
      if (
        attributes.attemptCount === null ||
        attributes.attemptCount === 0 ||
        (
          attributes.attemptCount &&
          !isNaN(attributes.attemptCount)
        )
      ) {
        this.attemptCount = attributes.attemptCount;
      }
      if (attributes.notificationSentAt !== undefined) {
        this.notificationSentAt = attributes.notificationSentAt;
      }
      if (attributes.notificationResult !== undefined) {
        this.notificationResult = attributes.notificationResult;
      }
      if (attributes.notificationId !== undefined) {
        this.notificationId = attributes.notificationId;
      }
      if (attributes.textData !== undefined) {
        this.textData = attributes.textData;
      }
      if (attributes.report !== undefined) {
        this.report = attributes.report;
      }
      if (attributes.emailPassed !== undefined) {
        this.emailPassed = attributes.emailPassed;
      }
      if (attributes.emailUpdatedAt !== undefined) {
        this.emailUpdatedAt = attributes.emailUpdatedAt;
      }
      if (attributes.emailVerifiedAt !== undefined) {
        this.emailVerifiedAt = attributes.emailVerifiedAt;
      }
      if (attributes.errors !== undefined) {
        this.errors = attributes.errors;
      }
      if (attributes.password !== undefined) {
        this.password = attributes.password;
      }
      if (attributes.passwordPassed !== undefined) {
        this.passwordPassed = attributes.passwordPassed;
      }
      if (attributes.passwordResettedAt !== undefined) {
        this.passwordResettedAt = attributes.passwordResettedAt;
      }
      if (attributes.passwordUpdatedAt !== undefined) {
        this.passwordUpdatedAt = attributes.passwordUpdatedAt;
      }
      if (attributes.phoneNumberPassed !== undefined) {
        this.phoneNumberPassed = attributes.phoneNumberPassed;
      }
      if (attributes.phoneNumberUpdatedAt !== undefined) {
        this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
      }
      if (attributes.phoneNumberVerifiedAt !== undefined) {
        this.phoneNumberVerifiedAt = attributes.phoneNumberVerifiedAt;
      }
      if (attributes.signedInAt !== undefined) {
        this.signedInAt = attributes.signedInAt;
      }
      if (attributes.tfaBackupCodes !== undefined) {
        this.tfaBackupCodes = attributes.tfaBackupCodes;
      }
      if (attributes.expiresAt !== undefined) {
        this.expiresAt = attributes.expiresAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
