import { BaseModel } from './BaseModel.js';
import {
  MultiStepActionResult,
  MultiStepActionSendNotificationResult,
  MultiStepActionStatus,
  MultiStepActionType,
  NotificationMethod,
} from '../enums.js';
import { MultiStepActionError } from '../types/MultiStepActionError.js';

export class SidMultiStepActionProgress extends BaseModel {
  public actionId = '';
  public userId = '';
  public actionType: MultiStepActionType = MultiStepActionType.unset;
  public actionStatus?: MultiStepActionStatus | null;
  public notificationMethod?: NotificationMethod | null;
  public result: MultiStepActionResult = MultiStepActionResult.unset;
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
  public authToken?: string | null;
  public authTokenExpiresAt?: string | null;
  public passwordPassed?: boolean | null;
  public passwordResettedAt?: string | null;
  public passwordUpdatedAt?: string | null;
  public phoneNumberPassed?: boolean | null;
  public phoneNumberUpdatedAt?: string | null;
  public phoneNumberVerifiedAt?: string | null;
  public signedInAt?: string | null;
  public expiresAt?: string | null;
  // public events?: ModelEvent[] | null

  constructor(attributes?: Partial<SidMultiStepActionProgress>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.actionId) {
        this.actionId = attributes.actionId;
      }
      if (attributes.userId) {
        this.userId = attributes.userId;
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
      if (
        attributes.attemptCount === 0 ||
        (attributes.attemptCount && !isNaN(attributes.attemptCount))
      ) {
        this.attemptCount = attributes.attemptCount;
      }
      if (attributes.notificationSentAt) {
        this.notificationSentAt = attributes.notificationSentAt;
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
        this.emailUpdatedAt = attributes.emailUpdatedAt;
      }
      if (attributes.emailVerifiedAt) {
        this.emailVerifiedAt = attributes.emailVerifiedAt;
      }
      if (attributes.errors) {
        this.errors = attributes.errors;
      }
      if (attributes.authToken) {
        this.authToken = attributes.authToken;
      }
      if (attributes.authTokenExpiresAt) {
        this.authTokenExpiresAt = attributes.authTokenExpiresAt;
      }
      if (
        attributes.passwordPassed === true ||
        attributes.passwordPassed === false
      ) {
        this.passwordPassed = attributes.passwordPassed;
      }
      if (attributes.passwordResettedAt) {
        this.passwordResettedAt = attributes.passwordResettedAt;
      }
      if (attributes.passwordUpdatedAt) {
        this.passwordUpdatedAt = attributes.passwordUpdatedAt;
      }
      if (
        attributes.phoneNumberPassed === true ||
        attributes.phoneNumberPassed === false
      ) {
        this.phoneNumberPassed = attributes.phoneNumberPassed;
      }
      if (attributes.phoneNumberUpdatedAt) {
        this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
      }
      if (attributes.phoneNumberVerifiedAt) {
        this.phoneNumberVerifiedAt = attributes.phoneNumberVerifiedAt;
      }
      if (attributes.signedInAt) {
        this.signedInAt = attributes.signedInAt;
      }
      if (attributes.expiresAt) {
        this.expiresAt = attributes.expiresAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
