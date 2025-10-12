import { BaseModel } from './BaseModel.js';
export class SidUser extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    firstName;
    lastName;
    userHandle;
    phoneNumber;
    phoneNumberUpdatedAt;
    isPhoneNumberVerified = false;
    email;
    emailUpdatedAt;
    isEmailVerified = false;
    genderTextId;
    cityOfResidence;
    regionOfResidence;
    countryOfResidenceTextId;
    postalCode;
    avatarUrl;
    websites;
    inviteCode;
    passwordHash;
    passwordUpdatedAt;
    preferredLanguageTextId;
    spokenLanguagesTextIds = [];
    selectedUiLanguageTextId;
    fallbackUiLanguageTextId;
    discoverable;
    roles = [];
    appFeatures;
    source;
    timezone;
    preferences;
    trustLevel = 1;
    userBlocks;
    termsAndConditionsAcceptedAt;
    optIntoNewsletter;
    onboardingStage;
    isTestUser;
    signedInAt;
    signedOutAt;
    latestActivityAt;
    inactivatedAt;
    inactivatedBy;
    suspendedAt;
    suspendedBy;
    anonymizedAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.firstName !== undefined) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName !== undefined) {
                this.lastName = attributes.lastName;
            }
            if (attributes.userHandle !== undefined) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.phoneNumber !== undefined) {
                this.phoneNumber = attributes.phoneNumber;
            }
            if (attributes.phoneNumberUpdatedAt !== undefined && attributes.phoneNumberUpdatedAt !== '') {
                this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
            }
            if (attributes.isPhoneNumberVerified !== undefined) {
                this.isPhoneNumberVerified = attributes.isPhoneNumberVerified;
            }
            if (attributes.email !== undefined) {
                this.email = attributes.email;
            }
            if (attributes.emailUpdatedAt !== undefined && attributes.emailUpdatedAt !== '') {
                this.emailUpdatedAt = attributes.emailUpdatedAt;
            }
            if (attributes.isEmailVerified !== undefined) {
                this.isEmailVerified = attributes.isEmailVerified;
            }
            if (attributes.genderTextId !== undefined) {
                this.genderTextId = attributes.genderTextId;
            }
            if (attributes.cityOfResidence !== undefined) {
                this.cityOfResidence = attributes.cityOfResidence;
            }
            if (attributes.regionOfResidence !== undefined) {
                this.regionOfResidence = attributes.regionOfResidence;
            }
            if (attributes.countryOfResidenceTextId !== undefined) {
                this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
            }
            if (attributes.postalCode !== undefined) {
                this.postalCode = attributes.postalCode;
            }
            if (attributes.avatarUrl !== undefined) {
                this.avatarUrl = attributes.avatarUrl;
            }
            if (attributes.websites !== undefined) {
                this.websites = attributes.websites;
            }
            if (attributes.inviteCode !== undefined) {
                this.inviteCode = attributes.inviteCode;
            }
            if (attributes.passwordHash !== undefined) {
                this.passwordHash = attributes.passwordHash;
            }
            if (attributes.passwordUpdatedAt !== undefined && attributes.passwordUpdatedAt !== '') {
                this.passwordUpdatedAt = attributes.passwordUpdatedAt;
            }
            if (attributes.preferredLanguageTextId !== undefined) {
                this.preferredLanguageTextId = attributes.preferredLanguageTextId;
            }
            if (attributes.spokenLanguagesTextIds !== undefined) {
                this.spokenLanguagesTextIds = attributes.spokenLanguagesTextIds;
            }
            if (attributes.selectedUiLanguageTextId !== undefined) {
                this.selectedUiLanguageTextId = attributes.selectedUiLanguageTextId;
            }
            if (attributes.fallbackUiLanguageTextId !== undefined) {
                this.fallbackUiLanguageTextId = attributes.fallbackUiLanguageTextId;
            }
            if (attributes.discoverable !== undefined) {
                this.discoverable = attributes.discoverable;
            }
            if (attributes.roles !== undefined) {
                this.roles = attributes.roles;
            }
            if (attributes.appFeatures !== undefined) {
                this.appFeatures = attributes.appFeatures;
            }
            if (attributes.source !== undefined) {
                this.source = attributes.source;
            }
            if (attributes.timezone !== undefined) {
                this.timezone = attributes.timezone;
            }
            if (attributes.preferences !== undefined) {
                this.preferences = attributes.preferences;
            }
            if (attributes.trustLevel === null ||
                attributes.trustLevel === 0 ||
                (attributes.trustLevel &&
                    !isNaN(attributes.trustLevel))) {
                this.trustLevel = attributes.trustLevel;
            }
            if (attributes.userBlocks !== undefined) {
                this.userBlocks = attributes.userBlocks;
            }
            if (attributes.metadata !== undefined) {
                this.metadata = attributes.metadata;
            }
            if (attributes.termsAndConditionsAcceptedAt !== undefined && attributes.termsAndConditionsAcceptedAt !== '') {
                this.termsAndConditionsAcceptedAt = attributes.termsAndConditionsAcceptedAt;
            }
            if (attributes.optIntoNewsletter !== undefined) {
                this.optIntoNewsletter = attributes.optIntoNewsletter;
            }
            if (attributes.onboardingStage !== undefined) {
                this.onboardingStage = attributes.onboardingStage;
            }
            if (attributes.isTestUser !== undefined) {
                this.isTestUser = attributes.isTestUser;
            }
            if (attributes.signedInAt !== undefined && attributes.signedInAt !== '') {
                this.signedInAt = attributes.signedInAt;
            }
            if (attributes.signedOutAt !== undefined && attributes.signedOutAt !== '') {
                this.signedOutAt = attributes.signedOutAt;
            }
            if (attributes.latestActivityAt !== undefined && attributes.latestActivityAt !== '') {
                this.latestActivityAt = attributes.latestActivityAt;
            }
            if (attributes.inactivatedAt !== undefined && attributes.inactivatedAt !== '') {
                this.inactivatedAt = attributes.inactivatedAt;
            }
            if (attributes.inactivatedBy !== undefined) {
                this.inactivatedBy = attributes.inactivatedBy;
            }
            if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy !== undefined) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.anonymizedAt !== undefined && attributes.anonymizedAt !== '') {
                this.anonymizedAt = attributes.anonymizedAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidUser.js.map