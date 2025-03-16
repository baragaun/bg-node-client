import { BaseModel } from './BaseModel.js';
import {
  MultiStepActionError,
  MultiStepActionResult,
  MultiStepActionSendNotificationResult,
  MultiStepActionStatus,
  MultiStepActionType,
  NotificationMethod,
} from '../../fsdata/gql/graphql.js';

export class SidMultiStepAction extends BaseModel {
  public userId = '';
  public userIdent?: string | null;
  public userHandle?: string | null;
  public email?: string | null;
  public phoneNumber?: string | null;
  public deviceUuid?: string | null;
  public actionType: MultiStepActionType = MultiStepActionType.Unset;
  public actionStatus: MultiStepActionStatus = MultiStepActionStatus.Created;
  public notificationMethod: NotificationMethod = NotificationMethod.Auto;
  public result: MultiStepActionResult = MultiStepActionResult.Unset;
  public confirmToken?: string | null;
  public attemptCount = 0;
  public notificationSentAt?: Date | null;
  public notificationResult?: MultiStepActionSendNotificationResult | null;
  public notificationId?: string | null;
  public textData?: string | null;
  public report?: string | null;
  public emailPassed?: boolean | null;
  public emailUpdatedAt?: Date | null;
  public emailVerifiedAt?: Date | null;
  public errors?: MultiStepActionError[] | null;
  public password?: string | null;
  public passwordPassed?: boolean | null;
  public passwordResettedAt?: Date | null;
  public passwordUpdatedAt?: Date | null;
  public phoneNumberPassed?: boolean | null;
  public phoneNumberUpdatedAt?: Date | null;
  public phoneNumberVerifiedAt?: Date | null;
  public signedInAt?: Date | null;
  public tfaBackupCodes?: string | null;
  public expiresAt?: Date | null;

  constructor(attributes?: Partial<SidMultiStepAction>) {
    super(attributes);

    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.userIdent) {
        this.userIdent = attributes.userIdent;
      }
      if (attributes.userHandle) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.email) {
        this.email = attributes.email;
      }
      if (attributes.phoneNumber) {
        this.phoneNumber = attributes.phoneNumber;
      }
      if (attributes.deviceUuid) {
        this.deviceUuid = attributes.deviceUuid;
      }
      if (attributes.actionType) {
        this.actionType = attributes.actionType;
      }
      if (attributes.actionStatus) {
        this.actionStatus = attributes.actionStatus;
      }
      if (attributes.notificationMethod) {
        this.notificationMethod = attributes.notificationMethod;
      }
      if (attributes.result) {
        this.result = attributes.result;
      }
      if (attributes.confirmToken) {
        this.confirmToken = attributes.confirmToken;
      }
      if (
        attributes.attemptCount === 0 ||
        (attributes.attemptCount && !isNaN(attributes.attemptCount))
      ) {
        this.attemptCount = attributes.attemptCount;
      }
      if (attributes.notificationSentAt) {
        if (attributes.notificationSentAt instanceof Date) {
          this.notificationSentAt = attributes.notificationSentAt;
        } else {
          this.notificationSentAt = new Date(attributes.notificationSentAt);
        }
      }
      if (attributes.notificationResult) {
        this.notificationResult = attributes.notificationResult;
      }
      if (attributes.notificationId) {
        this.notificationId = attributes.notificationId;
      }
      if (attributes.textData) {
        this.textData = attributes.textData;
      }
      if (attributes.report) {
        this.report = attributes.report;
      }
      if (attributes.emailPassed === true || attributes.emailPassed === false) {
        this.emailPassed = attributes.emailPassed;
      }
      if (attributes.emailUpdatedAt) {
        if (attributes.emailUpdatedAt instanceof Date) {
          this.emailUpdatedAt = attributes.emailUpdatedAt;
        } else {
          this.emailUpdatedAt = new Date(attributes.emailUpdatedAt);
        }
      }
      if (attributes.emailVerifiedAt) {
        if (attributes.emailVerifiedAt instanceof Date) {
          this.emailVerifiedAt = attributes.emailVerifiedAt;
        } else {
          this.emailVerifiedAt = new Date(attributes.emailVerifiedAt);
        }
      }
      if (attributes.errors) {
        this.errors = attributes.errors;
      }
      if (attributes.password) {
        this.password = attributes.password;
      }
      if (
        attributes.passwordPassed === true ||
        attributes.passwordPassed === false
      ) {
        this.passwordPassed = attributes.passwordPassed;
      }
      if (attributes.passwordResettedAt) {
        if (attributes.passwordResettedAt instanceof Date) {
          this.passwordResettedAt = attributes.passwordResettedAt;
        } else {
          this.passwordResettedAt = new Date(attributes.passwordResettedAt);
        }
      }
      if (attributes.passwordUpdatedAt) {
        if (attributes.passwordUpdatedAt instanceof Date) {
          this.passwordUpdatedAt = attributes.passwordUpdatedAt;
        } else {
          this.passwordUpdatedAt = new Date(attributes.passwordUpdatedAt);
        }
      }
      if (
        attributes.phoneNumberPassed === true ||
        attributes.phoneNumberPassed === false
      ) {
        this.phoneNumberPassed = attributes.phoneNumberPassed;
      }
      if (attributes.phoneNumberUpdatedAt) {
        if (attributes.phoneNumberUpdatedAt instanceof Date) {
          this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
        } else {
          this.phoneNumberUpdatedAt = new Date(attributes.phoneNumberUpdatedAt);
        }
      }
      if (attributes.phoneNumberVerifiedAt) {
        if (attributes.phoneNumberVerifiedAt instanceof Date) {
          this.phoneNumberVerifiedAt = attributes.phoneNumberVerifiedAt;
        } else {
          this.phoneNumberVerifiedAt = new Date(
            attributes.phoneNumberVerifiedAt,
          );
        }
      }
      if (attributes.signedInAt) {
        if (attributes.signedInAt instanceof Date) {
          this.signedInAt = attributes.signedInAt;
        } else {
          this.signedInAt = new Date(attributes.signedInAt);
        }
      }
      if (attributes.tfaBackupCodes) {
        this.tfaBackupCodes = attributes.tfaBackupCodes;
      }
      if (attributes.expiresAt) {
        if (attributes.expiresAt instanceof Date) {
          this.expiresAt = attributes.expiresAt;
        } else {
          this.expiresAt = new Date(attributes.expiresAt);
        }
      }
    }
  }
}
