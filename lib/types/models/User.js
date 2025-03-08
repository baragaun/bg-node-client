import { BaseModel } from './BaseModel.js';
export class User extends BaseModel {
    firstName;
    lastName;
    userHandle;
    // public phoneNumber?: string | null;
    // public phoneNumberUpdatedAt?: string | null;
    // public isPhoneNumberVerified = false;
    email;
    emailUpdatedAt;
    isEmailVerified = false;
    // public emailSource?: string | null;
    // public genderTextId?: string | null;
    cityOfResidence;
    regionOfResidence;
    countryOfResidenceTextId;
    // public postalCode?: string | null;
    avatarUrl;
    websites;
    authType;
    passwordHash;
    // public tfaBackupCodes?: string | null;
    passwordUpdatedAt;
    preferredLanguageTextId;
    spokenLanguagesTextIds = [];
    selectedUiLanguageTextId;
    fallbackUiLanguageTextId;
    // public discoverable?: boolean | null;
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
    // public addedToBgVaultAt?: string | null;
    // // public isAdmin?: boolean;
    // public isTestUser?: boolean;
    // public emailLowerCase?: string | null;
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
            // if (attributes.phoneNumber) {
            //   this.phoneNumber = attributes.phoneNumber;
            // }
            // if (attributes.phoneNumberUpdatedAt) {
            //   this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
            // }
            // if (attributes.isPhoneNumberVerified === true || attributes.isPhoneNumberVerified === false) {
            //   this.isPhoneNumberVerified = attributes.isPhoneNumberVerified;
            // }
            if (attributes.email) {
                this.email = attributes.email;
            }
            if (attributes.emailUpdatedAt) {
                this.emailUpdatedAt = attributes.emailUpdatedAt;
            }
            if (attributes.isEmailVerified === true || attributes.isEmailVerified === false) {
                this.isEmailVerified = attributes.isEmailVerified;
            }
            // if (attributes.emailSource) {
            //   this.emailSource = attributes.emailSource;
            // }
            // if (attributes.genderTextId) {
            //   this.genderTextId = attributes.genderTextId;
            // }
            if (attributes.cityOfResidence) {
                this.cityOfResidence = attributes.cityOfResidence;
            }
            if (attributes.regionOfResidence) {
                this.regionOfResidence = attributes.regionOfResidence;
            }
            if (attributes.countryOfResidenceTextId) {
                this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
            }
            // if (attributes.postalCode) {
            //   this.postalCode = attributes.postalCode;
            // }
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
            // if (attributes.tfaBackupCodes) {
            //   this.tfaBackupCodes = attributes.tfaBackupCodes;
            // }
            if (attributes.passwordUpdatedAt) {
                this.passwordUpdatedAt = attributes.passwordUpdatedAt;
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
            // if (attributes.discoverable === true || attributes.discoverable === false) {
            //   this.discoverable = attributes.discoverable;
            // }
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
            if (attributes.trustLevel === 0 || (attributes.trustLevel && !isNaN(attributes.trustLevel))) {
                this.trustLevel = attributes.trustLevel;
            }
            if (attributes.signedInAt) {
                this.signedInAt = attributes.signedInAt;
            }
            if (attributes.signedOutAt) {
                this.signedOutAt = attributes.signedOutAt;
            }
            if (attributes.latestActivityAt) {
                this.latestActivityAt = attributes.latestActivityAt;
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
                this.inactivatedAt = attributes.inactivatedAt;
            }
            if (attributes.inactivatedBy) {
                this.inactivatedBy = attributes.inactivatedBy;
            }
            if (attributes.termsAndConditionsAcceptedAt) {
                this.termsAndConditionsAcceptedAt = attributes.termsAndConditionsAcceptedAt;
            }
            if (attributes.optIntoNewsletter === true || attributes.optIntoNewsletter === false) {
                this.optIntoNewsletter = attributes.optIntoNewsletter;
            }
            if (attributes.onboardingStage) {
                this.onboardingStage = attributes.onboardingStage;
            }
            if (attributes.suspendedAt) {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=User.js.map