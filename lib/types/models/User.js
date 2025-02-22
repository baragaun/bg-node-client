import { BaseModel } from "./BaseModel.js";
export class User extends BaseModel {
    firstName;
    lastName;
    userHandle;
    phoneNumber;
    phoneNumberUpdatedAt;
    isPhoneNumberVerified = false;
    email;
    emailUpdatedAt;
    isEmailVerified = false;
    emailSource;
    genderTextId;
    cityOfResidence;
    regionOfResidence;
    countryOfResidenceTextId;
    postalCode;
    avatarUrl;
    websites;
    authType;
    passwordHash;
    tfaBackupCodes;
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
    signedInAt;
    signedOutAt;
    latestActivityAt;
    // public userDevices: UserDeviceWithoutAuth[] = []
    userBlocks;
    // public relationships?: UserRelationship[] | null
    // public metadata?: UserMetadata | null
    inactivatedAt;
    inactivatedBy;
    termsAndConditionsAcceptedAt;
    optIntoNewsletter;
    onboardingStage;
    suspendedAt;
    suspendedBy;
    addedToBgVaultAt;
    isAdmin;
    isTestUser;
    emailLowerCase;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.firstName) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName) {
                this.lastName = attributes.lastName;
            }
            if (attributes.userHandle) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.phoneNumber) {
                this.phoneNumber = attributes.phoneNumber;
            }
            if (attributes.phoneNumberUpdatedAt) {
                if (attributes.phoneNumberUpdatedAt instanceof Date) {
                    this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
                }
                else {
                    this.phoneNumberUpdatedAt = new Date(attributes.phoneNumberUpdatedAt);
                }
            }
            if (attributes.isPhoneNumberVerified === true || attributes.isPhoneNumberVerified === false) {
                this.isPhoneNumberVerified = attributes.isPhoneNumberVerified;
            }
            if (attributes.email) {
                this.email = attributes.email;
            }
            if (attributes.emailLowerCase) {
                this.emailLowerCase = attributes.emailLowerCase;
            }
            if (attributes.emailUpdatedAt) {
                if (attributes.emailUpdatedAt instanceof Date) {
                    this.emailUpdatedAt = attributes.emailUpdatedAt;
                }
                else {
                    this.emailUpdatedAt = new Date(attributes.emailUpdatedAt);
                }
            }
            if (attributes.isEmailVerified === true || attributes.isEmailVerified === false) {
                this.isEmailVerified = attributes.isEmailVerified;
            }
            if (attributes.emailSource) {
                this.emailSource = attributes.emailSource;
            }
            if (attributes.genderTextId) {
                this.genderTextId = attributes.genderTextId;
            }
            if (attributes.cityOfResidence) {
                this.cityOfResidence = attributes.cityOfResidence;
            }
            if (attributes.regionOfResidence) {
                this.regionOfResidence = attributes.regionOfResidence;
            }
            if (attributes.countryOfResidenceTextId) {
                this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
            }
            if (attributes.postalCode) {
                this.postalCode = attributes.postalCode;
            }
            if (attributes.avatarUrl) {
                this.avatarUrl = attributes.avatarUrl;
            }
            if (attributes.websites) {
                this.websites = attributes.websites;
            }
            if (attributes.authType) {
                this.authType = attributes.authType;
            }
            if (attributes.passwordHash) {
                this.passwordHash = attributes.passwordHash;
            }
            if (attributes.tfaBackupCodes) {
                this.tfaBackupCodes = attributes.tfaBackupCodes;
            }
            if (attributes.passwordUpdatedAt) {
                if (attributes.passwordUpdatedAt instanceof Date) {
                    this.passwordUpdatedAt = attributes.passwordUpdatedAt;
                }
                else {
                    this.passwordUpdatedAt = new Date(attributes.passwordUpdatedAt);
                }
            }
            if (attributes.preferredLanguageTextId) {
                this.preferredLanguageTextId = attributes.preferredLanguageTextId;
            }
            if (attributes.spokenLanguagesTextIds) {
                this.spokenLanguagesTextIds = attributes.spokenLanguagesTextIds;
            }
            if (attributes.selectedUiLanguageTextId) {
                this.selectedUiLanguageTextId = attributes.selectedUiLanguageTextId;
            }
            if (attributes.fallbackUiLanguageTextId) {
                this.fallbackUiLanguageTextId = attributes.fallbackUiLanguageTextId;
            }
            if (attributes.discoverable === true || attributes.discoverable === false) {
                this.discoverable = attributes.discoverable;
            }
            if (attributes.roles) {
                this.roles = attributes.roles;
            }
            if (attributes.appFeatures) {
                this.appFeatures = attributes.appFeatures;
            }
            if (attributes.source) {
                this.source = attributes.source;
            }
            if (attributes.timezone) {
                this.timezone = attributes.timezone;
            }
            // if (attributes.preferences) {
            //   this.preferences = attributes.preferences
            // }
            if (attributes.trustLevel === 0 ||
                (attributes.trustLevel &&
                    !isNaN(attributes.trustLevel))) {
                this.trustLevel = attributes.trustLevel;
            }
            if (attributes.signedInAt) {
                if (attributes.signedInAt instanceof Date) {
                    this.signedInAt = attributes.signedInAt;
                }
                else {
                    this.signedInAt = new Date(attributes.signedInAt);
                }
            }
            if (attributes.signedOutAt) {
                if (attributes.signedOutAt instanceof Date) {
                    this.signedOutAt = attributes.signedOutAt;
                }
                else {
                    this.signedOutAt = new Date(attributes.signedOutAt);
                }
            }
            if (attributes.latestActivityAt) {
                if (attributes.latestActivityAt instanceof Date) {
                    this.latestActivityAt = attributes.latestActivityAt;
                }
                else {
                    this.latestActivityAt = new Date(attributes.latestActivityAt);
                }
            }
            // if (attributes.userDevices) {
            //   this.userDevices = attributes.userDevices
            // }
            if (attributes.userBlocks) {
                this.userBlocks = attributes.userBlocks;
            }
            // if (attributes.relationships) {
            //   this.relationships = attributes.relationships
            // }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
            if (attributes.inactivatedAt) {
                if (attributes.inactivatedAt instanceof Date) {
                    this.inactivatedAt = attributes.inactivatedAt;
                }
                else {
                    this.inactivatedAt = new Date(attributes.inactivatedAt);
                }
            }
            if (attributes.inactivatedBy) {
                this.inactivatedBy = attributes.inactivatedBy;
            }
            if (attributes.termsAndConditionsAcceptedAt) {
                if (attributes.termsAndConditionsAcceptedAt instanceof Date) {
                    this.termsAndConditionsAcceptedAt = attributes.termsAndConditionsAcceptedAt;
                }
                else {
                    this.termsAndConditionsAcceptedAt = new Date(attributes.termsAndConditionsAcceptedAt);
                }
            }
            if (attributes.optIntoNewsletter === true || attributes.optIntoNewsletter === false) {
                this.optIntoNewsletter = attributes.optIntoNewsletter;
            }
            if (attributes.onboardingStage) {
                this.onboardingStage = attributes.onboardingStage;
            }
            if (attributes.suspendedAt) {
                if (attributes.suspendedAt instanceof Date) {
                    this.suspendedAt = attributes.suspendedAt;
                }
                else {
                    this.suspendedAt = new Date(attributes.suspendedAt);
                }
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.addedToBgVaultAt) {
                if (attributes.addedToBgVaultAt instanceof Date) {
                    this.addedToBgVaultAt = attributes.addedToBgVaultAt;
                }
                else {
                    this.addedToBgVaultAt = new Date(attributes.addedToBgVaultAt);
                }
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
            // Non-GraphQL fields:
            if (attributes.isAdmin === true || attributes.isAdmin === false) {
                this.isAdmin = attributes.isAdmin;
            }
            if (attributes.isTestUser === true || attributes.isTestUser === false) {
                this.isTestUser = attributes.isTestUser;
            }
            if (attributes.emailLowerCase) {
                this.emailLowerCase = attributes.emailLowerCase;
            }
        }
    }
}
//# sourceMappingURL=User.js.map