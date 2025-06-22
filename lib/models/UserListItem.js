export class UserListItem {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    id = '';
    createdAt = new Date().toISOString();
    updatedAt;
    deletedAt;
    userHandle;
    firstName;
    lastName;
    avatarUrl;
    genderTextId;
    websites;
    preferredLanguageTextId;
    spokenLanguagesTextIds = [];
    countryOfResidenceTextId;
    regionOfResidence;
    cityOfResidence;
    timezone;
    roles = [];
    discoverable;
    trustLevel = 1;
    userBlocks;
    latestActivityAt;
    inactivatedAt;
    suspendedAt;
    seeksHelp;
    offersHelp;
    yearsManagementExperience;
    yearsOwnershipExperience;
    academicExperiences = [];
    businessExperiences = [];
    isOnVacation;
    mentor;
    mentee;
    groupMemberships = [];
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.id !== undefined) {
                this.id = attributes.id;
            }
            if (attributes.createdAt !== undefined && attributes.createdAt !== '') {
                this.createdAt = attributes.createdAt;
            }
            if (attributes.updatedAt !== undefined && attributes.updatedAt !== '') {
                this.updatedAt = attributes.updatedAt;
            }
            if (attributes.deletedAt !== undefined && attributes.deletedAt !== '') {
                this.deletedAt = attributes.deletedAt;
            }
            if (attributes.userHandle !== undefined) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.firstName !== undefined) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName !== undefined) {
                this.lastName = attributes.lastName;
            }
            if (attributes.avatarUrl !== undefined) {
                this.avatarUrl = attributes.avatarUrl;
            }
            if (attributes.genderTextId !== undefined) {
                this.genderTextId = attributes.genderTextId;
            }
            if (attributes.websites !== undefined) {
                this.websites = attributes.websites;
            }
            if (attributes.preferredLanguageTextId !== undefined) {
                this.preferredLanguageTextId = attributes.preferredLanguageTextId;
            }
            if (attributes.spokenLanguagesTextIds !== undefined) {
                this.spokenLanguagesTextIds = attributes.spokenLanguagesTextIds;
            }
            if (attributes.countryOfResidenceTextId !== undefined) {
                this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
            }
            if (attributes.regionOfResidence !== undefined) {
                this.regionOfResidence = attributes.regionOfResidence;
            }
            if (attributes.cityOfResidence !== undefined) {
                this.cityOfResidence = attributes.cityOfResidence;
            }
            if (attributes.timezone !== undefined) {
                this.timezone = attributes.timezone;
            }
            if (attributes.roles !== undefined) {
                this.roles = attributes.roles;
            }
            if (attributes.discoverable !== undefined) {
                this.discoverable = attributes.discoverable;
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
            if (attributes.latestActivityAt !== undefined && attributes.latestActivityAt !== '') {
                this.latestActivityAt = attributes.latestActivityAt;
            }
            if (attributes.inactivatedAt !== undefined && attributes.inactivatedAt !== '') {
                this.inactivatedAt = attributes.inactivatedAt;
            }
            if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.seeksHelp !== undefined) {
                this.seeksHelp = attributes.seeksHelp;
            }
            if (attributes.offersHelp !== undefined) {
                this.offersHelp = attributes.offersHelp;
            }
            if (attributes.yearsManagementExperience === null ||
                attributes.yearsManagementExperience === 0 ||
                (attributes.yearsManagementExperience &&
                    !isNaN(attributes.yearsManagementExperience))) {
                this.yearsManagementExperience = attributes.yearsManagementExperience;
            }
            if (attributes.yearsOwnershipExperience === null ||
                attributes.yearsOwnershipExperience === 0 ||
                (attributes.yearsOwnershipExperience &&
                    !isNaN(attributes.yearsOwnershipExperience))) {
                this.yearsOwnershipExperience = attributes.yearsOwnershipExperience;
            }
            if (attributes.academicExperiences !== undefined) {
                this.academicExperiences = attributes.academicExperiences;
            }
            if (attributes.businessExperiences !== undefined) {
                this.businessExperiences = attributes.businessExperiences;
            }
            if (attributes.isOnVacation !== undefined) {
                this.isOnVacation = attributes.isOnVacation;
            }
            if (attributes.mentor !== undefined) {
                this.mentor = attributes.mentor;
            }
            if (attributes.mentee !== undefined) {
                this.mentee = attributes.mentee;
            }
            if (attributes.groupMemberships !== undefined) {
                this.groupMemberships = attributes.groupMemberships;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['firstName', 'lastName', 'userHandle'];
    }
}
//# sourceMappingURL=UserListItem.js.map