import {
  MultiStepActionResult,
  MultiStepActionSendNotificationResult,
  MultiStepActionStatus,
  MultiStepActionType,
  NotificationMethod,
} from '../enums.js';
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { ModelEvent } from './ModelEvent.js';
import { MultiStepActionError } from '../types/MultiStepActionError.js';

export class SidMultiStepActionProgress {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
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
  public events?: ModelEvent[] | null;
  public metadata?: BaseModelMetadata | null;
  public createdAt?: string | null;
  public createdBy?: string | null;
  public updatedAt?: string | null;
  public updatedBy?: string | null;
  public deletedAt?: string | null;
  public deletedBy?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<SidMultiStepActionProgress>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.actionId !== undefined) {
        this.actionId = attributes.actionId;
      }
      if (attributes.userId !== undefined) {
        this.userId = attributes.userId;
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
      if (attributes.notificationSentAt !== undefined && attributes.notificationSentAt !== '') {
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
      if (attributes.emailUpdatedAt !== undefined && attributes.emailUpdatedAt !== '') {
        this.emailUpdatedAt = attributes.emailUpdatedAt;
      }
      if (attributes.emailVerifiedAt !== undefined && attributes.emailVerifiedAt !== '') {
        this.emailVerifiedAt = attributes.emailVerifiedAt;
      }
      if (attributes.errors !== undefined) {
        this.errors = attributes.errors;
      }
      if (attributes.authToken !== undefined) {
        this.authToken = attributes.authToken;
      }
      if (attributes.authTokenExpiresAt !== undefined && attributes.authTokenExpiresAt !== '') {
        this.authTokenExpiresAt = attributes.authTokenExpiresAt;
      }
      if (attributes.passwordPassed !== undefined) {
        this.passwordPassed = attributes.passwordPassed;
      }
      if (attributes.passwordResettedAt !== undefined && attributes.passwordResettedAt !== '') {
        this.passwordResettedAt = attributes.passwordResettedAt;
      }
      if (attributes.passwordUpdatedAt !== undefined && attributes.passwordUpdatedAt !== '') {
        this.passwordUpdatedAt = attributes.passwordUpdatedAt;
      }
      if (attributes.phoneNumberPassed !== undefined) {
        this.phoneNumberPassed = attributes.phoneNumberPassed;
      }
      if (attributes.phoneNumberUpdatedAt !== undefined && attributes.phoneNumberUpdatedAt !== '') {
        this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
      }
      if (attributes.phoneNumberVerifiedAt !== undefined && attributes.phoneNumberVerifiedAt !== '') {
        this.phoneNumberVerifiedAt = attributes.phoneNumberVerifiedAt;
      }
      if (attributes.signedInAt !== undefined && attributes.signedInAt !== '') {
        this.signedInAt = attributes.signedInAt;
      }
      if (attributes.expiresAt !== undefined && attributes.expiresAt !== '') {
        this.expiresAt = attributes.expiresAt;
      }
      if (attributes.events !== undefined) {
        this.events = attributes.events;
      }
      if (attributes.metadata !== undefined) {
        this.metadata = attributes.metadata;
      }
      if (attributes.createdAt !== undefined && attributes.createdAt !== '') {
        this.createdAt = attributes.createdAt;
      }
      if (attributes.createdBy !== undefined) {
        this.createdBy = attributes.createdBy;
      }
      if (attributes.updatedAt !== undefined && attributes.updatedAt !== '') {
        this.updatedAt = attributes.updatedAt;
      }
      if (attributes.updatedBy !== undefined) {
        this.updatedBy = attributes.updatedBy;
      }
      if (attributes.deletedAt !== undefined && attributes.deletedAt !== '') {
        this.deletedAt = attributes.deletedAt;
      }
      if (attributes.deletedBy !== undefined) {
        this.deletedBy = attributes.deletedBy;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
