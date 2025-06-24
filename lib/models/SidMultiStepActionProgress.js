import { MultiStepActionResult, MultiStepActionType, } from '../enums.js';
export class SidMultiStepActionProgress {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    actionId = '';
    userId = '';
    actionType = MultiStepActionType.unset;
    actionStatus;
    notificationMethod;
    result = MultiStepActionResult.unset;
    attemptCount = 0;
    notificationSentAt;
    notificationResult;
    notificationId;
    textData;
    report;
    emailPassed;
    emailUpdatedAt;
    emailVerifiedAt;
    errors;
    authToken;
    authTokenExpiresAt;
    passwordPassed;
    passwordResettedAt;
    passwordUpdatedAt;
    phoneNumberPassed;
    phoneNumberUpdatedAt;
    phoneNumberVerifiedAt;
    signedInAt;
    expiresAt;
    events;
    metadata;
    createdAt;
    createdBy;
    updatedAt;
    updatedBy;
    deletedAt;
    deletedBy;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
            if (attributes.attemptCount === null ||
                attributes.attemptCount === 0 ||
                (attributes.attemptCount &&
                    !isNaN(attributes.attemptCount))) {
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
//# sourceMappingURL=SidMultiStepActionProgress.js.map