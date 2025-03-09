import { MultiStepActionResult, MultiStepActionType, } from '../../fsdata/gql/graphql.js';
export class SidMultiStepActionProgress {
    actionId = '';
    userId = '';
    actionType = MultiStepActionType.Unset;
    actionStatus;
    notificationMethod;
    result = MultiStepActionResult.Unset;
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
    // public events?: ModelEvent[] | null
    metadata;
    createdAt;
    createdBy;
    updatedAt;
    updatedBy;
    deletedAt;
    deletedBy;
    constructor(attributes) {
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
            if (attributes.attemptCount === 0 ||
                (attributes.attemptCount && !isNaN(attributes.attemptCount))) {
                this.attemptCount = attributes.attemptCount;
            }
            if (attributes.notificationSentAt) {
                if (attributes.notificationSentAt instanceof Date) {
                    this.notificationSentAt = attributes.notificationSentAt;
                }
                else {
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
                }
                else {
                    this.emailUpdatedAt = new Date(attributes.emailUpdatedAt);
                }
            }
            if (attributes.emailVerifiedAt) {
                if (attributes.emailVerifiedAt instanceof Date) {
                    this.emailVerifiedAt = attributes.emailVerifiedAt;
                }
                else {
                    this.emailVerifiedAt = new Date(attributes.emailVerifiedAt);
                }
            }
            if (attributes.errors) {
                this.errors = attributes.errors;
            }
            if (attributes.authToken) {
                this.authToken = attributes.authToken;
            }
            if (attributes.authTokenExpiresAt) {
                if (attributes.authTokenExpiresAt instanceof Date) {
                    this.authTokenExpiresAt = attributes.authTokenExpiresAt;
                }
                else {
                    this.authTokenExpiresAt = new Date(attributes.authTokenExpiresAt);
                }
            }
            if (attributes.passwordPassed === true || attributes.passwordPassed === false) {
                this.passwordPassed = attributes.passwordPassed;
            }
            if (attributes.passwordResettedAt) {
                if (attributes.passwordResettedAt instanceof Date) {
                    this.passwordResettedAt = attributes.passwordResettedAt;
                }
                else {
                    this.passwordResettedAt = new Date(attributes.passwordResettedAt);
                }
            }
            if (attributes.passwordUpdatedAt) {
                if (attributes.passwordUpdatedAt instanceof Date) {
                    this.passwordUpdatedAt = attributes.passwordUpdatedAt;
                }
                else {
                    this.passwordUpdatedAt = new Date(attributes.passwordUpdatedAt);
                }
            }
            if (attributes.phoneNumberPassed === true || attributes.phoneNumberPassed === false) {
                this.phoneNumberPassed = attributes.phoneNumberPassed;
            }
            if (attributes.phoneNumberUpdatedAt) {
                if (attributes.phoneNumberUpdatedAt instanceof Date) {
                    this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
                }
                else {
                    this.phoneNumberUpdatedAt = new Date(attributes.phoneNumberUpdatedAt);
                }
            }
            if (attributes.phoneNumberVerifiedAt) {
                if (attributes.phoneNumberVerifiedAt instanceof Date) {
                    this.phoneNumberVerifiedAt = attributes.phoneNumberVerifiedAt;
                }
                else {
                    this.phoneNumberVerifiedAt = new Date(attributes.phoneNumberVerifiedAt);
                }
            }
            if (attributes.signedInAt) {
                if (attributes.signedInAt instanceof Date) {
                    this.signedInAt = attributes.signedInAt;
                }
                else {
                    this.signedInAt = new Date(attributes.signedInAt);
                }
            }
            if (attributes.expiresAt) {
                if (attributes.expiresAt instanceof Date) {
                    this.expiresAt = attributes.expiresAt;
                }
                else {
                    this.expiresAt = new Date(attributes.expiresAt);
                }
            }
            // if (attributes.events) {
            //   this.events = attributes.events
            // }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
            if (attributes.createdAt) {
                if (attributes.createdAt instanceof Date) {
                    this.createdAt = attributes.createdAt;
                }
                else {
                    this.createdAt = new Date(attributes.createdAt);
                }
            }
            if (attributes.createdBy) {
                this.createdBy = attributes.createdBy;
            }
            if (attributes.updatedAt) {
                if (attributes.updatedAt instanceof Date) {
                    this.updatedAt = attributes.updatedAt;
                }
                else {
                    this.updatedAt = new Date(attributes.updatedAt);
                }
            }
            if (attributes.updatedBy) {
                this.updatedBy = attributes.updatedBy;
            }
            if (attributes.deletedAt) {
                if (attributes.deletedAt instanceof Date) {
                    this.deletedAt = attributes.deletedAt;
                }
                else {
                    this.deletedAt = new Date(attributes.deletedAt);
                }
            }
            if (attributes.deletedBy) {
                this.deletedBy = attributes.deletedBy;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidMultiStepActionProgress.js.map